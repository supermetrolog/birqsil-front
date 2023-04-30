import {AxiosStatic} from "axios";

export default class BaseApi {
    protected _axios: AxiosStatic;
    constructor(axios: AxiosStatic) {
        this._axios = axios;
    }

    get axios(): AxiosStatic
    {
        return this._axios;
    }
}