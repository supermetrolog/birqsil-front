import {integer} from "vscode-languageserver-types";
import {IAccessToken} from "cabinet/domain/components/api/Auth";
import axios from "axios";
import UserTokenStorage from "common/domain/components/user/UserTokenStorage";

export interface IUser {
    id: integer,
    email: string
}

export interface IdentityService {
    findByAccessToken(token: string): Promise<IUser|null>;
}

export default class User {
    private _identity: IUser|null = null;
    private _accessToken: IAccessToken;
    private _isGuest: boolean = true;
    private storage: UserTokenStorage;
    private service: IdentityService;

    constructor(service: IdentityService) {
        this.storage = new UserTokenStorage();
        this.service = service;
    }

    get identity(): IUser|null {
        return this._identity;
    }

    get isGuest(): boolean {
        return this._isGuest;
    }

    public logout(): void {
        this._isGuest = true;
        this._identity = null;
        this.storage.remove();
        this.clearAxios();
    }

    public async login(accessToken: IAccessToken): Promise<void> {
        this.setUpAxios(accessToken.token);
        const identity: IUser|null = await this.service.findByAccessToken(accessToken.token);
        if (!identity) {
            this.logout();
            throw new Error('Invalid access token');
        }

        this._isGuest = false;
        this._identity = identity;
        this._accessToken = accessToken;

        this.storage.set(accessToken);
    }
    public can(permission: string): boolean {
        return false; // TODO: need implements
    }

    public is(role: string): boolean {
        return false; // TODO need implements
    }

    public async init(): Promise<boolean> {
        if (this.identity && process.client) {
            return true;
        }

        return await this.refresh();
    }

    public async refresh(): Promise<boolean> {
        const token: IAccessToken | null = this.storage.get();

        if (!token) {
            this.logout();
            return false;
        }

        this.setUpAxios(token.token);

        const identity: IUser|null = await this.service.findByAccessToken(token.token);

        if (!identity) {
            this.logout();
            return false
        }

        this._isGuest = false;
        this._identity = identity;
        this._accessToken = token;
        this.setUpAxios(this._accessToken.token);

        return true;
    }

    private setUpAxios(token: string): void {
        if (axios.defaults.headers.common) {
            axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
        }
    }

    private clearAxios(): void {
        if (axios.defaults.headers.common) {
            delete axios.defaults.headers.common["Authorization"];
        }
    }
}