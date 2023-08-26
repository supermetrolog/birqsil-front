import ApiFactory from "~/domain/factories/ApiFactory";
import GeneralService from "~/domain/services/GeneralService";

export default class GeneralServiceFactory {
    private static service: GeneralService;

    static create(): GeneralService {
        if (!this.service) {
            this.service = new GeneralService(ApiFactory.create());
        }
        return this.service;
    }
}