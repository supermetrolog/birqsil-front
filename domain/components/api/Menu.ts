import BaseApi, {Response} from "~/domain/components/api/BaseApi";
import MenuItemEntity from "~/domain/entities/MenuItem";
import {integer} from "vscode-languageserver-types";

export interface IMenuItemData {
    restaurant_id: integer,
    title: string,
    description: string,
    status: integer
}

export default class Menu extends BaseApi {
    public async getAll(restaurantId: integer): Promise<MenuItemEntity[]> {
        const response: Response = await this.get('menu/' + restaurantId);
        return response.data();
    }

    public async getOne(id: integer): Promise<MenuItemEntity> {
        const response: Response = await this.get('menu/' + id);
        return response.data();
    }


    public async create(data: IMenuItemData): Promise<Response>{
        return await this.post('menu', data);
    }

    public async update(id: integer, data: IMenuItemData): Promise<Response>{
        return await this.put('menu/' + id, data);
    }

    public async remove(id: integer): Promise<Response>{
        return await this.delete('menu/' + id);
    }
}