import BaseService from "~/domain/services/BaseService";
import Restaurant from "~/domain/entities/Restaurant";
import {IRestaurantData} from "~/domain/components/api/Restaurant";
import {Response} from "~/domain/components/api/BaseApi";

export default class RestaurantService extends BaseService {
    public async getAllRestaurant(): Promise<Restaurant[]> {
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
}