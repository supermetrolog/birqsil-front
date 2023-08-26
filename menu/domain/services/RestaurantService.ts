import BaseService from "./BaseService";
import Restaurant from "../../../common/domain/entities/Restaurant";

export default class RestaurantService extends BaseService {
    public async getOneByUniqueName(uniqueName: string): Promise<Restaurant>
    {
        const expand: string[] = [
            'categories.menuItems.image',
            'categories.menuItems.unit',
        ];
        return await this.api.restaurant.getOneByUniqueName(uniqueName, expand);
    }
}