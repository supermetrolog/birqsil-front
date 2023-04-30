import {ISignUpData} from "~/domain/components/api/Auth";
import BaseService from "~/domain/services/BaseService";

export default class extends BaseService {
    signUp(data: ISignUpData): boolean {
        return this.api.auth.signup(data);
    }
}
