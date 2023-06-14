import BaseApi, {Response} from "~/domain/components/api/BaseApi";
import RestaurantEntity from "~/domain/entities/Restaurant";

export default class Restaurant extends BaseApi {
    public async getAll(): Promise<RestaurantEntity[]> {
        const response: Response = await this.get('restaurant');
        return response.data();
    }
}