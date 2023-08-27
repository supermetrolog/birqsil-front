import BaseService from "~/domain/services/BaseService";
import {Response} from "../../../common/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";
import Category from "../../../common/domain/entities/Category";
import {ICategoryData} from "~/domain/components/api/Category";
import MenuItem from "../../../common/domain/entities/MenuItem";
import {getValue} from "../../../common/helpers/Array";

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

    public async sortUp(items: Category[], item: Category): Promise<boolean>
    {
        const index: integer = items.indexOf(item);
        const afterItem: Category|null = getValue(items, index - 1);

        return (await this.api.category.sort(item.id, afterItem?.id ?? null)).isOk();
    }

    public async sortDown(items: Category[], item: Category): Promise<boolean>
    {
        const index: integer = items.indexOf(item);
        const afterItem: Category|null = getValue(items, index + 2);

        return (await this.api.category.sort(item.id, afterItem?.id ?? null)).isOk();
    }
}