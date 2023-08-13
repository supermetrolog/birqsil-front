import API from "../../../common/domain/components/api/API";

export default class ApiFactory {
    private static api: API

    static create(): API {
        if (!this.api) {
            const config = useRuntimeConfig();
            this.api = new API(config.public.apiBaseUrl);
        }
        return this.api;
    }
}