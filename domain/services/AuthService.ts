import {IAccessToken, ISignUpData} from "~/domain/components/api/Auth";
import BaseService from "~/domain/services/BaseService";

export default class AuthService extends BaseService {
    public async signUp(data: ISignUpData): Promise<IAccessToken> {
        return await this.api.auth.signup(data);
    }
}
