import {IAccessToken} from "cabinet/domain/components/api/Auth";
import {CookieOptions, CookieRef} from "#app";

export const TOKEN_KEY: string = 'token';

export default class UserTokenStorage {
    public get(): IAccessToken|null {
        return this.getCookie();
    }

    private getCookie(): IAccessToken|null {
        const cookies: CookieRef<IAccessToken|null> = useCookie(TOKEN_KEY)
        return cookies.value;
    }

    public set(token: IAccessToken): void {
        this.setCookie(token)
    }

    private setCookie(token: IAccessToken): void
    {
        const cookies: CookieRef<IAccessToken> = useCookie(
            TOKEN_KEY,
            {
                maxAge: new Date().getTime() + token.expire
            } as CookieOptions
        );

        cookies.value = token;
    }

    public remove(): void {
        this.removeCookie();
    }

    private removeCookie(): void {
        const cookies: CookieRef<IAccessToken|null> = useCookie(TOKEN_KEY);
        cookies.value = null;
    }
}