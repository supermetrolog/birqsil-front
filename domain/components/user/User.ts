import {integer} from "vscode-languageserver-types";
import {IAccessToken} from "~/domain/components/api/Auth";
import Storage from "~/domain/components/storage/Storage";
import {StorageItem} from "~/composables/storage";
import axios from "axios";

const STORAGE_KEY: string = 'user';

export interface IUser {
    id: integer,
    email: string
}

interface StorageData {
    accessToken: IAccessToken,
    identity: IUser,
    isGuest: boolean
}

export default class User {
    private _identity: IUser|null = null;
    private _accessToken: IAccessToken;
    private _isGuest: boolean = true;
    private storage: Storage;
    constructor(storage: Storage) {
        console.log('CREATE  USER');
        this.storage = storage;
        this.init();
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

    public login(identity: IUser, accessToken: IAccessToken): void {
        this._isGuest = false;
        this._identity = identity;
        this._accessToken = accessToken;

        const storageDto: StorageData = {
            isGuest: false,
            identity: identity,
            accessToken: accessToken
        };

        this.storage.set(STORAGE_KEY, storageDto, accessToken.expire);
        this.setUpAxios();
    }
    public can(permission: string): boolean {
        return false; // TODO: need implements
    }

    public is(role: string): boolean {
        return false; // TODO need implements
    }

    public init(): void {
        const userItem: StorageItem|null= this.storage.get(STORAGE_KEY);
        if (userItem) {
            const data = userItem.data as StorageData;
            this._isGuest = data.isGuest;
            this._identity = data.identity;
            this._accessToken = data.accessToken;
            this.setUpAxios();
        }
    }

    private setUpAxios(): void {
        if (axios.defaults.headers.common) {
            axios.defaults.headers.common["Authorization"] = 'Bearer ' + this._accessToken.token;
        }
    }
}