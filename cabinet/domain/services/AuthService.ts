import {IAccessToken, ISignUpData} from "~/domain/components/api/Auth";
import BaseService from "~/domain/services/BaseService";
import API from "../../../common/domain/components/api/API";
import User from "../../../common/domain/components/user/User";
import {IUser} from "~/domain/components/api/User";
import {Response} from "../../../common/domain/components/api/BaseApi";

export default class AuthService extends BaseService {
    private user: User;
    constructor(api: API, user: User) {
        super(api);
        this.user = user;
    }

    public async signUp(data: ISignUpData): Promise<void> {
        const res: Response = await this.api.auth.signup(data);
        const accessToken: IAccessToken = res.data();
        await this.user.login(accessToken);
    }

    public async signIn(data: ISignUpData): Promise<Response> {
        const res: Response = await this.api.auth.signin(data);
        if (res.isOk()) {
            const accessToken: IAccessToken = res.data();
            await this.user.login(accessToken);
            return res;
        }

        return res;
    }
}
