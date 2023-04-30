import BaseService from "~/domain/services/BaseService";

export default class UserService extends BaseService {
    public async checkEmailExists(email: string): Promise<boolean> {
        return await this.api.user.checkEmailExists(email);
    }
}
