import {integer} from "vscode-languageserver-types";
import {IAccessToken} from "~/domain/components/api/Auth";
import Storage from "~/domain/components/storage/Storage";
import axios from "axios";
import {CookieRef} from "#app";

const STORAGE_KEY: string = 'token';

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
    private storage: Storage;
    private service: IdentityService;
    private alreadyRefresh: boolean = false;

    constructor(storage: Storage, service: IdentityService) {
        console.log('CREATE  USER');
        this.storage = storage;
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
        this.storage.remove(STORAGE_KEY);
    }

    public async login(accessToken: IAccessToken): Promise<void> {
        const identity:IUser|null = await this.service.findByAccessToken(accessToken.token);

        if (!identity) {
            throw new Error('Invalid access token');
        }

        this._isGuest = false;
        this._identity = identity;
        this._accessToken = accessToken;

        this.storage.setCookie(STORAGE_KEY, accessToken, accessToken.expire);

        this.setUpAxios();
    }
    public can(permission: string): boolean {
        return false; // TODO: need implements
    }

    public is(role: string): boolean {
        return false; // TODO need implements
    }

    public async refresh(): Promise<boolean> {
        if (this.alreadyRefresh) {
            return true;
        }

        const token: CookieRef<IAccessToken> = this.storage.getCookie<IAccessToken>(STORAGE_KEY);

        if (!token.value) {
            return false;
        }

        const identity: IUser|null = await this.service.findByAccessToken(token.value.token);

        if (!identity) {
            return false
        }

        this._isGuest = false;
        this._identity = identity;
        this._accessToken = token.value;
        this.setUpAxios();

        this.alreadyRefresh = true;
        return true;
    }

    private setUpAxios(): void {
        if (axios.defaults.headers.common) {
            axios.defaults.headers.common["Authorization"] = 'Bearer ' + this._accessToken.token;
        }
    }
}