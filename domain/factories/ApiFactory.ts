import API from "~/domain/components/api/API";
import api from "~/plugins/api";

export default class ApiFactory {
    private static api: API

    static create(): API {
        if (!this.api) {
            this.api = new API('http://localhost:21900/v1');
        }
        return this.api;
    }
}