import {AxiosStatic} from "axios";
import BaseApi from "~/domain/components/api/BaseApi";

export interface ISignUpData {
    email: string;
    password: string;
    passwordRepeat: string;
};

export default class Auth extends BaseApi {
    public signup(data: ISignUpData): boolean
    {
        console.log(data);
        return false;
    }
}