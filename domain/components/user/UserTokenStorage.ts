import {IAccessToken} from "~/domain/components/api/Auth";
import Cookies from "cookies-ts";
import {Request} from "node-fetch";

export const TOKEN_KEY: string = 'token';

export default class UserTokenStorage {
    private request: Request;

    public setRequest(req: Request): void {
        this.request = req;
    }

    public get(): IAccessToken|null {
        if (process.client) {
            return this.getLocalStorage() ?? this.getCookie();
        } else {
            return this.getRequestCookie();
        }
    }

    private getRequestCookie(): IAccessToken|null {
        console.log('Request', this.request);
        const jsonToken: string | null = this.request.headers.get(TOKEN_KEY);
        if (!jsonToken) {
            return null;
        }

        return JSON.parse(jsonToken);
    }

    private getCookie(): IAccessToken|null {
        const cookies: Cookies = new Cookies();
        return cookies.get(TOKEN_KEY) as IAccessToken|null;
    }

    private getLocalStorage(): IAccessToken|null {
        const ls: Storage= window.localStorage;
        const jsonToken: string|null = ls.getItem(TOKEN_KEY);
        if (!jsonToken) {
            return null;
        }
        return JSON.parse(jsonToken);
    }

    public set(token: IAccessToken): void {
        if (process.client) {
            this.setLocalStorage(token)
            this.setCookie(token)
        } else {
            this.setCookie(token)
        }
    }

    private setLocalStorage(token: IAccessToken): void
    {
        const ls: Storage = window.localStorage;
        ls.setItem(TOKEN_KEY, JSON.stringify(token));
    }

    private setCookie(token: IAccessToken): void
    {
        const cookies: Cookies = new Cookies();
        cookies.set(TOKEN_KEY, JSON.stringify(token), {
            expires: new Date().getTime() + token.expire,
        });
    }

    public remove(): void {
        if (process.client) {
           this.removeLocalStorage();
           this.removeCookie();
        } else {
            this.removeCookie();
        }
    }

    private removeLocalStorage(): void {
        const ls: Storage = window.localStorage;
        ls.removeItem(TOKEN_KEY)
    }

    private removeCookie(): void {
        const cookies: Cookies = new Cookies();
        cookies.remove(TOKEN_KEY);
    }
}