import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";
import MenuItemEntity from "../../../../common/domain/entities/MenuItem";
import {integer} from "vscode-languageserver-types";

export interface IMenuItemData {
    restaurant_id: integer,
    category_id: integer,
    title: string,
    description: string,
    status: integer,
    files: FileList,
    price: integer;
    sale_price: integer;
    unit_id: integer;
    amount: integer;
}

export default class Menu extends BaseApi {
    public async getAll(restaurantId: integer, expand: string[] = []): Promise<MenuItemEntity[]> {
        const queryParams: {expand: string} = {};
        if (expand.length) {
            queryParams.expand = expand.join(',');
        }

        const response: Response = await this.get('menu/' + restaurantId, queryParams);
        return response.data();
    }

    public async getOne(id: integer, expand: string[] = []): Promise<MenuItemEntity> {
        const queryParams: {expand: string} = {};
        if (expand.length) {
            queryParams.expand = expand.join(',');
        }

        const response: Response = await this.get('menu/item/' + id, queryParams);

        return new MenuItemEntity(response.data());
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

    public async setImage(id: integer, file: File): Promise<Response> {
        const fd: FormData = new FormData();
        fd.append('image', file);
        return await this.post('menu/' + id + '/upload-file', fd);
    }
}