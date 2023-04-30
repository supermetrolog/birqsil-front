import Auth from "~/domain/components/api/Auth";
import axios from "axios";
import User from "~/domain/components/api/User";

export default class API {
    public baseUrl: string;

    private readonly _auth: Auth
    private readonly _user: User

    constructor(baseUrl: string) {
        console.log("CREATE API");
        this.baseUrl = baseUrl;
        this._auth = new Auth(axios);
        this._user = new User(axios);
    }

    get auth(): Auth {
        return this._auth;
    }

    get user(): User {
        return this._user;
    }
}