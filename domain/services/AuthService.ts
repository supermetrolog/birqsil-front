import API from "~/domain/components/api/API";
import {ISignUpData} from "~/domain/components/api/Auth";

export default class {
    api: API;

    constructor(api: API) {
        this.api = api;
    }

    signUp(data: ISignUpData): boolean {
        return this.api.auth.signup(data);
    }
}
