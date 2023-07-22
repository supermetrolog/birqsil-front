import ApiFactory from "~/domain/factories/ApiFactory";
import MenuService from "~/domain/services/MenuService";

export default class MenuServiceFactory {
    private static service: MenuService;

    static create(): MenuService {
        if (!this.service) {
            this.service = new MenuService(ApiFactory.create());
        }
        return this.service;
    }
}