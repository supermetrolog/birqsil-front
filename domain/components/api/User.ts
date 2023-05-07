import BaseApi from "~/domain/components/api/BaseApi";

export interface IEmailExistsResponse {
    exists: boolean
}

export default class User extends BaseApi {
    public async checkEmailExists(email: string): Promise<IEmailExistsResponse>
    {
        return await this.get('user/check-email-exists',{
            params: {
                email
            }
        });
    }
}