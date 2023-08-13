import BaseApi, {Response} from "./BaseApi";
import RestaurantEntity from "./../../entities/Restaurant";

export default class Restaurant extends BaseApi {
    public async getOneByUniqueName(uniqueName: string, expand: string[] = []): Promise<RestaurantEntity>
    {
        const queryParams: {expand: string} = {};
        if (expand.length) {
            queryParams.expand = expand.join(',');
        }

        const response: Response = await this.get('restaurant/unique/' + uniqueName, queryParams);
        return response.data();
    }
}