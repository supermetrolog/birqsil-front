import {IAccessToken, ISignUpData} from "~/domain/components/api/Auth";
import BaseService from "~/domain/services/BaseService";
import API from "~/domain/components/api/API";
import User from "~/domain/components/user/User";
import {IUser} from "~/domain/components/api/User";
import {Response} from "~/domain/components/api/BaseApi";

export default class AuthService extends BaseService {
    private user: User;
    constructor(api: API, user: User) {
        super(api);
        this.user = user;
    }

    public async signUp(data: ISignUpData): Promise<void> {
        const res: Response = await this.api.auth.signup(data);
        const accessToken: IAccessToken = res.data();
        await this.setUserByAccessToken(accessToken);
    }

    public async signIn(data: ISignUpData): Promise<boolean> {
        const res: Response = await this.api.auth.signin(data);
        const accessToken: IAccessToken = res.data();
        console.log(accessToken);
        await this.setUserByAccessToken(accessToken)
    }

    private async setUserByAccessToken(accessToken: IAccessToken): Promise<void> {
        const user: IUser|null = await this.api.user.findByAccessToken(accessToken.token);
        if (!user) {
            throw new Error('User not found');
        }

        this.user.login(user, accessToken);
    }
}
