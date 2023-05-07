import {AxiosRequestConfig, AxiosResponse, AxiosStatic} from "axios";
import {a} from "vite-node/types-c39b64bb";

export default class BaseApi {
    private readonly _axios: AxiosStatic;
    constructor(axios: AxiosStatic) {
        this._axios = axios;
    }

    get axios(): AxiosStatic
    {
        return this._axios;
    }

    public async get(path: string, options: AxiosRequestConfig = {}): Promise<any> {
        const res: AxiosResponse = await this.axios.get(path, options);
        return res.data;
    }

    public async post(path: string, data: any, options: AxiosRequestConfig = {}): Promise<any> {
        const res: AxiosResponse = await this.axios.post(path, data, options);
        return res.data;
    }
}