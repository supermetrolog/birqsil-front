import AuthService from "~/domain/services/AuthService";
import ApiFactory from "~/domain/factories/ApiFactory";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";

export default class AuthServiceFactory {
    private static service: AuthService;

    static create(): AuthService {
        if (!this.service) {
            this.service = new AuthService(ApiFactory.create(), UserComponentFactory.create());
        }
        return this.service;
    }
}