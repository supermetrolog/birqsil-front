import BaseApi, {Response} from "~/domain/components/api/BaseApi";
import RestaurantEntity from "~/domain/entities/Restaurant";
import {integer} from "vscode-languageserver-types";

export interface IRestaurantData {
    name: string,
    address: string,
    status: integer
}

export default class Restaurant extends BaseApi {
    public async getAll(): Promise<RestaurantEntity[]> {
        const response: Response = await this.get('restaurant');
        return response.data();
    }

    public async create(data: IRestaurantData): Promise<Response>{
        return await this.post('restaurant', data);
    }

    public async delete(id: integer): Promise<Response>{
        return await this.delete('restaurant');
    }
}