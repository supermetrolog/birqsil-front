import API from "~/domain/components/api/API";

export default class ApiFactory {
    create(): API {
        return new API('http://localhost:21900/v1');
    }
}