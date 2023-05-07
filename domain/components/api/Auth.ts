import BaseApi from "~/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";

export interface ISignUpData {
    email: string;
    password: string;
    passwordRepeat: string;
};

export interface IAccessToken {
    token: string;
    expire: integer;
}
export default class Auth extends BaseApi {
    public async signup(data: ISignUpData): Promise<IAccessToken>
    {
        return await this.post('signup', data);
    }
}