import ApiFactory from "~/domain/factories/ApiFactory";
import CategoryService from "~/domain/services/CategoryService";

export default class CategoryServiceFactory {
    private static service: CategoryService;

    static create(): CategoryService {
        if (!this.service) {
            this.service = new CategoryService(ApiFactory.create());
        }
        return this.service;
    }
}