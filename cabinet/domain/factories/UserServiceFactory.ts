import ApiFactory from "~/domain/factories/ApiFactory";
import UserService from "~/domain/services/UserService";

export default class UserServiceFactory {
    private static service: UserService;

    static create(): UserService {
        if (!this.service) {
            this.service = new UserService(ApiFactory.create());
        }
        return this.service;
    }
}