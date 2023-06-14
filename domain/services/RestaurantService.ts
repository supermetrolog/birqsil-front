import BaseService from "~/domain/services/BaseService";
import Restaurant from "~/domain/entities/Restaurant";

export default class RestaurantService extends BaseService {
    public async getAllRestaurant(): Promise<Restaurant[]> {
        return this.api.restaurant.getAll();
    }
}