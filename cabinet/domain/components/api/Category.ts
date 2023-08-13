import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";
import CategoryEntity from "../../../../common/domain/entities/Category";
import {integer} from "vscode-languageserver-types";

export interface ICategoryData {
    restaurant_id: integer,
    name: string,
}

export default class Category extends BaseApi {
    public async getAll(restaurantId: integer, expand: string[] = []): Promise<CategoryEntity[]> {
        const queryParams: {expand: string} = {};
        if (expand.length) {
            queryParams.expand = expand.join(',');
        }

        const response: Response = await this.get('category/' + restaurantId, queryParams);
        return response.data();
    }

    public async getOne(id: integer, expand: string[] = []): Promise<CategoryEntity> {
        const queryParams: {expand: string} = {};
        if (expand.length) {
            queryParams.expand = expand.join(',');
        }

        const response: Response = await this.get('category/item/' + id, queryParams);

        return new CategoryEntity(response.data());
    }


    public async create(data: ICategoryData): Promise<Response>{
        return await this.post('category', data);
    }

    public async update(id: integer, data: ICategoryData): Promise<Response>{
        return await this.put('category/' + id, data);
    }

    public async remove(id: integer): Promise<Response>{
        return await this.delete('category/' + id);
    }
}