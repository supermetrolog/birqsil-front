import {AxiosRequestConfig, AxiosResponse, AxiosStatic} from "axios";
import {a} from "vite-node/types-c39b64bb";
import {integer} from "vscode-languageserver-types";

export class Response {
    private readonly _axiosResponse: AxiosResponse

    constructor(response: AxiosResponse) {
        this._axiosResponse = response;
    }

    get axiosResponse(): AxiosResponse {
        return this._axiosResponse;
    }

    public status(): integer {
        return this.axiosResponse.status;
    }

    public isOk(): boolean {
        return this.status() >= 200 && this.status() < 300;
    }

    public isBadRequest(): boolean {
        return this.status() >= 400 && this.status() < 500;
    }

    public data(): any {
        return this.axiosResponse.data;
    }

    public getErrors(): string[]
    {
        return this.data().errors;
    }
}

export default class BaseApi {
    private readonly _axios: AxiosStatic;
    constructor(axios: AxiosStatic) {
        this._axios = axios;
    }

    get axios(): AxiosStatic
    {
        return this._axios;
    }

    protected async get(path: string, options: AxiosRequestConfig = {}): Promise<Response> {
        const res: AxiosResponse = await this.axios.get(path, {
            ...options,
            validateStatus: function (status) {
                return status < 500; // Resolve only if the status code is less than 500
            }
        });

        return new Response(res);
    }

    protected async post(path: string, data: any, options: AxiosRequestConfig = {}): Promise<Response> {
        const res: AxiosResponse = await this.axios.post(path, data, {
            ...options,
            validateStatus: function (status) {
                return status < 500; // Resolve only if the status code is less than 500
            }
        });

        return new Response(res);
    }

    protected async put(path: string, data: any, options: AxiosRequestConfig = {}): Promise<Response> {
        const res: AxiosResponse = await this.axios.put(path, data, {
            ...options,
            validateStatus: function (status) {
                return status < 500; // Resolve only if the status code is less than 500
            }
        });

        return new Response(res);
    }
    protected async delete(path: string, options: AxiosRequestConfig = {}): Promise<Response> {
        const res: AxiosResponse = await this.axios.delete(path, {
            ...options,
            validateStatus: function (status) {
                return status < 500; // Resolve only if the status code is less than 500
            }
        });

        return new Response(res);
    }
}