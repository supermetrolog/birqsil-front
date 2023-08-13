import BaseService from "~/domain/services/BaseService";
import {IdentityService, IUser} from "../../../common/domain/components/user/User";

export default class UserService extends BaseService implements IdentityService {
    public async checkEmailExists(email: string): Promise<boolean> {
        return await this.api.user.checkEmailExists(email);
    }

    public async findByAccessToken(token: string): Promise<IUser | null> {
        return await this.api.user.findByAccessToken(token);
    }
}
