import BaseService from "~/domain/services/BaseService";
import {IEmailExistsResponse} from "~/domain/components/api/User";
import {Response} from "~/domain/components/api/BaseApi";
import {IdentityService, IUser} from "~/domain/components/user/User";

export default class UserService extends BaseService implements IdentityService {
    public async checkEmailExists(email: string): Promise<boolean> {
        const res: Response = await this.api.user.checkEmailExists(email);
        const data: IEmailExistsResponse = res.data();
        return data.exists;
    }

    public async findByAccessToken(token: string): Promise<IUser | null> {
        return await this.api.user.findByAccessToken(token);
    }
}
