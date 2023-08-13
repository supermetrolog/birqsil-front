import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";
import RestaurantEntity from "../../../../common/domain/entities/Restaurant";
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

    public async getOne(id: integer): Promise<RestaurantEntity> {
        const response: Response = await this.get('restaurant/' + id);
        return response.data();
    }

    public async getOneByUniqueName(uniqueName: string, expand: string[] = []): Promise<RestaurantEntity>
    {
        const queryParams: {expand: string} = {};
        if (expand.length) {
            queryParams.expand = expand.join(',');
        }

        const response: Response = await this.get('restaurant/unique/' + uniqueName, queryParams);
        return response.data();
    }
    public async create(data: IRestaurantData): Promise<Response>{
        return await this.post('restaurant', data);
    }

    public async update(id: integer, data: IRestaurantData): Promise<Response>{
        return await this.put('restaurant/' + id, data);
    }

    public async remove(id: integer): Promise<Response>{
        return await this.delete('restaurant/' + id);
    }

    public async publish(id: integer): Promise<Response>
    {
        return await this.post('restaurant/' + id + '/publish');
    }

    public async hide(id: integer): Promise<Response>
    {
        return await this.post('restaurant/' + id + '/hide');
    }
}