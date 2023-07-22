import Auth from "~/domain/components/api/Auth";
import axios from "axios";
import User from "~/domain/components/api/User";
import Restaurant from "~/domain/components/api/Restaurant";
import Menu from "~/domain/components/api/Menu";

export default class API {
    public baseUrl: string;

    private readonly _auth: Auth
    private readonly _user: User
    private readonly _restaurant: Restaurant
    private readonly _menu: Menu

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.configureAxios();
        this._auth = new Auth(axios);
        this._user = new User(axios);
        this._restaurant = new Restaurant(axios);
        this._menu = new Menu(axios);
    }

    private configureAxios(): void {
        axios.defaults.baseURL = this.baseUrl;
    }
    get auth(): Auth {
        return this._auth;
    }

    get user(): User {
        return this._user;
    }

    get restaurant(): Restaurant {
        return this._restaurant;
    }

    get menu(): Menu {
        return this._menu;
    }
}