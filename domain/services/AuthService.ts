import {IAccessToken, ISignUpData} from "~/domain/components/api/Auth";
import BaseService from "~/domain/services/BaseService";
import API from "~/domain/components/api/API";
import User from "~/domain/components/user/User";
import {IUser} from "~/domain/components/api/User";

export default class AuthService extends BaseService {
    private user: User;
    constructor(api: API, user: User) {
        super(api);
        this.user = user;
    }

    public async signUp(data: ISignUpData): Promise<IAccessToken> {
        const accessToken: IAccessToken = await this.api.auth.signup(data);
        const user: IUser|null = await this.api.user.findByAccessToken(accessToken.token);
        if (!user) {
            throw new Error('User not found');
        }

        this.user.login(user, accessToken);
    }
}
