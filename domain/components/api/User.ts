import BaseApi from "~/domain/components/api/BaseApi";

export default class User extends BaseApi {
    public async checkEmailExists(email: string): Promise<boolean>
    {
        return await this.get('check-email-exists',{
            params: {
                email
            }
        });
    }
}