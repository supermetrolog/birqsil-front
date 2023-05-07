import API from "~/domain/components/api/API";

export default class ApiFactory {
    private static api: API

    static create(): API {
        if (!this.api) {
            this.api = new API('http://api.birqsil.ru/v1');
        }
        return this.api;
    }
}