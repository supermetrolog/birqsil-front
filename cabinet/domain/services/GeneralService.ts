import BaseService from "~/domain/services/BaseService";
import Unit from "../../../common/domain/entities/Unit";

export default class GeneralService extends BaseService {
    public async getAllUnits(): Promise<Unit[]> {
        return await this.api.general.getAllUnits();
    }
}