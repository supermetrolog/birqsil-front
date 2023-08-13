import RestaurantService from "../services/RestaurantService";
import ApiFactory from "./ApiFactory";

export default class RestaurantServiceFactory {
    private static service: RestaurantService;

    static create(): RestaurantService {
        if (!this.service) {
            this.service = new RestaurantService(ApiFactory.create());
        }
        return this.service;
    }
}