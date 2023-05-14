import BaseService from "~/domain/services/BaseService";
import {IEmailExistsResponse} from "~/domain/components/api/User";
import {Response} from "~/domain/components/api/BaseApi";

export default class UserService extends BaseService {
    public async checkEmailExists(email: string): Promise<boolean> {
        const res: Response = await this.api.user.checkEmailExists(email);
        const data: IEmailExistsResponse = res.data();
        return data.exists;
    }
}
