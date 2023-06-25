import BaseService from "~/domain/services/BaseService";
import Restaurant from "~/domain/entities/Restaurant";
import {IRestaurantData} from "~/domain/components/api/Restaurant";
import {Response} from "~/domain/components/api/BaseApi";
import {integer} from "vscode-languageserver-types";

export default class RestaurantService extends BaseService {
    public async getAll(): Promise<Restaurant[]> {
        return this.api.restaurant.getAll();
    }

    public async create(data: IRestaurantData): Promise<Restaurant|null>
    {
        const res: Response = await this.api.restaurant.create(data);
        if (res.isOk()) {
            return res.data()
        }

        return null;
    }

    public async update(id: integer, data: IRestaurantData): Promise<Restaurant|null>
    {
        const res: Response = await this.api.restaurant.update(id, data);
        if (res.isOk()) {
            return res.data()
        }

        return null;
    }

    public async delete(restaurant: Restaurant): Promise<boolean>
    {
        const res: Response = await this.api.restaurant.remove(restaurant.id);
        if (res.isOk()) {
            return true;
        }

        return false;
    }

    public async getOne(id: integer): Promise<Restaurant>
    {
        return await this.api.restaurant.getOne(id);
    }
}