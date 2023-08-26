import BaseApi, {Response} from "../../../../common/domain/components/api/BaseApi";
import Unit from "../../../../common/domain/entities/Unit";

export default class General extends BaseApi {
    public async getAllUnits(): Promise<Unit[]> {
        const response: Response = await this.get('unit');
        return response.data();
    }
}