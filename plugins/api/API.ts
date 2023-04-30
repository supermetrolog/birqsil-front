import Auth from "~/domain/components/api/Auth";
import axios from "axios";

export default class API {
    public baseUrl: string;
    private readonly _auth: Auth
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this._auth = new Auth(axios);
    }

    get auth(): Auth
    {
        return this._auth;
    }
}