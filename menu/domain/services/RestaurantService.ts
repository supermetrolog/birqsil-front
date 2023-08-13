import BaseService from "./BaseService";
import Restaurant from "../../../common/domain/entities/Restaurant";

export default class RestaurantService extends BaseService {
    public async getOneByUniqueName(uniqueName: string): Promise<Restaurant>
    {
        return await this.api.restaurant.getOneByUniqueName(uniqueName, ['categories.menuItems.image']);
    }
}