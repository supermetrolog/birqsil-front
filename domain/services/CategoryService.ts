import BaseService from "~/domain/services/BaseService";
import {Response} from "~/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";
import Category from "~/domain/entities/Category";
import {ICategoryData} from "~/domain/components/api/Category";

export default class CategoryService extends BaseService {
    public async getAll(restaurantId: integer, expand: string[] = []): Promise<Category[]> {
        return this.api.category.getAll(restaurantId, expand);
    }

    public async create(data: ICategoryData): Promise<Category|null>
    {
        const res: Response = await this.api.category.create(data);
        if (res.isOk()) {
            return res.data()
        }

        return null;
    }

    public async update(id: integer, data: ICategoryData): Promise<Category|null>
    {
        const res: Response = await this.api.category.update(id, data);
        if (res.isOk()) {
            return res.data()
        }

        return null;
    }

    public async delete(category: Category): Promise<boolean>
    {
        return (await this.api.category.remove(category.id)).isOk();
    }

    public async getOne(id: integer, expand: string[] = []): Promise<Category>
    {
        return await this.api.category.getOne(id, expand);
    }
}