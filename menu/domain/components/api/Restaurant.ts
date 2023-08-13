import RestaurantEntity from "./../../../../common/domain/entities/Restaurant";
import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";

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