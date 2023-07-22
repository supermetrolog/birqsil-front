import BaseService from "~/domain/services/BaseService";
import MenuItem from "~/domain/entities/MenuItem";
import {Response} from "~/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";
import {IMenuItemData} from "~/domain/components/api/Menu";

export default class MenuService extends BaseService {
    public async getAll(restaurantId: integer): Promise<MenuItem[]> {
        return this.api.menu.getAll(restaurantId);
    }

    public async create(data: IMenuItemData): Promise<MenuItem|null>
    {
        const res: Response = await this.api.menu.create(data);
        if (res.isOk()) {
            return res.data()
        }

        return null;
    }

    public async update(id: integer, data: IMenuItemData): Promise<MenuItem|null>
    {
        const res: Response = await this.api.menu.update(id, data);
        if (res.isOk()) {
            return res.data()
        }

        return null;
    }

    public async delete(menuItem: MenuItem): Promise<boolean>
    {
        return (await this.api.menu.remove(menuItem.id)).isOk();
    }

    public async getOne(id: integer, expand: string[] = []): Promise<MenuItem>
    {
        return await this.api.menu.getOne(id, expand);
    }

    public async setImage(id: integer, files: FileList): Promise<boolean>
    {
        if (files.length) {
            return (await this.api.menu.setImage(id, files[0])).isOk();
        }

        return false;
    }
}