import AuthService from "~/domain/services/AuthService";
import ApiFactory from "~/domain/factories/ApiFactory";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import RestaurantService from "~/domain/services/RestaurantService";

export default class RestaurantServiceFactory {
    private static service: RestaurantService;

    static create(): RestaurantService {
        if (!this.service) {
            this.service = new RestaurantService(ApiFactory.create());
        }
        return this.service;
    }
}