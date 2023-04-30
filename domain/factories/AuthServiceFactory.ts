import AuthService from "~/domain/services/AuthService";
import ApiFactory from "~/domain/factories/ApiFactory";

export default class AuthServiceFactory {
    private static service: AuthService;

    static create(): AuthService {
        if (!this.service) {
            this.service = new AuthService(ApiFactory.create());
        }
        return this.service;
    }
}