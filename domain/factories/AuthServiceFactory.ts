import AuthService from "~/domain/services/AuthService";
import API from "~/domain/components/api/API";
import ApiFactory from "~/domain/factories/ApiFactory";

export default class AuthServiceFactory {
    private readonly apiFactory: ApiFactory
    constructor() {
        this.apiFactory = new ApiFactory();
    }

    create(): AuthService {
        return new AuthService(this.apiFactory.create());
    }
}