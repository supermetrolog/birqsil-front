import {IAccessToken, ISignUpData} from "~/domain/components/api/Auth";
import BaseService from "~/domain/services/BaseService";

export default class AuthService extends BaseService {
    public async signUp(data: ISignUpData): Promise<boolean> {
        const accessToken: IAccessToken = await this.api.auth.signup(data);
        console.log(accessToken);

        return !!accessToken;
    }
}
