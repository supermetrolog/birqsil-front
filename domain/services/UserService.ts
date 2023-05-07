import BaseService from "~/domain/services/BaseService";
import {IEmailExistsResponse} from "~/domain/components/api/User";

export default class UserService extends BaseService {
    public async checkEmailExists(email: string): Promise<boolean> {
        const res: IEmailExistsResponse = await this.api.user.checkEmailExists(email);
        return res.exists;
    }
}
