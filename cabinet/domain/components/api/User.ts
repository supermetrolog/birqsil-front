import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";
import {AxiosResponse} from "axios";
import {routerKey} from "vue-router";

export interface IEmailExistsResponse {
    exists: boolean
}

export interface IUser {
    id: integer,
    email: string,
    status: integer,
    created_at: string,
    updated_at: string|null
}

export default class User extends BaseApi {
    public async checkEmailExists(email: string): Promise<boolean>
    {
        const response: Response = await this.get('user/check-email-exists',{
            params: {
                email
            }
        });

        if (!response.isOk()) {
            throw new Error('Check email exists error');
        }

        const data: IEmailExistsResponse = response.data();
        return data.exists;
    }

    public async findByAccessToken(token: string): Promise<IUser|null> {
        const response: Response = await this.get('user/find-by-token/' + token);

        if (response.isOk()) {
            return response.data();
        }

        return null;
    }
}