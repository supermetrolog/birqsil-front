import {AxiosStatic} from "axios";
import BaseApi from "~/domain/components/api/BaseApi";

export interface ISignUpData {
    email: string;
    password: string;
    passwordRepeat: string;
};

export interface IAccessToken {
    accessToken: string;
}
export default class Auth extends BaseApi {
    public async signup(data: ISignUpData): Promise<IAccessToken>
    {
        return await this.post('signup', data);
    }
}