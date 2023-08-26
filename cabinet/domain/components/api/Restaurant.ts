import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";
import RestaurantEntity from "../../../../common/domain/entities/Restaurant";
import {integer} from "vscode-languageserver-types";

export interface IUniqueNameExists {
    exists: boolean
}

export interface IRestaurantData {
    name: string,
    address: string,
    status: integer,
    unique_name: string
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

    public async checkExistsByUniqueName(uniqueName: string): Promise<IUniqueNameExists>
    {
        const response: Response = await this.get('restaurant/check-exists', {
            unique_name: uniqueName
        });

        if (!response.isOk()) {
            throw new Error('Api error');
        }

        return response.data()
    }
}