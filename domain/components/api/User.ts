import BaseApi, {Response} from "~/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";
import {AxiosResponse} from "axios";

export interface IEmailExistsResponse {
    exists: boolean
}

export interface IUser {
    id: integer,
    email: string
}

export default class User extends BaseApi {
    public async checkEmailExists(email: string): Promise<Response>
    {
        return await this.get('user/check-email-exists',{
            params: {
                email
            }
        });
    }

    public async findByAccessToken(token: string): Promise<IUser|null> {
        return {
            email: "fuck@suck.ru",
            id: 12
        };

        // const users: IUser[] = await this.get('user/search', {
        //     params: {
        //         access_token: token
        //     }
        // });
        //
        // if (users.length) {
        //     return users[0];
        // }
        //
        // return null;
    }
}