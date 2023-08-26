import axios from "axios";
import Auth from "~/domain/components/api/Auth";
import Restaurant from "~/domain/components/api/Restaurant";
import User from "~/domain/components/api/User";
import Menu from "~/domain/components/api/Menu";
import Category from "~/domain/components/api/Category";
import General from "~/domain/components/api/General";

export default class API {
    public baseUrl: string;

    private readonly _auth: Auth
    private readonly _user: User
    private readonly _restaurant: Restaurant
    private readonly _menu: Menu
    private readonly _category: Category
    private readonly _general: General

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.configureAxios();
        this._auth = new Auth(axios);
        this._user = new User(axios);
        this._restaurant = new Restaurant(axios);
        this._menu = new Menu(axios);
        this._category = new Category(axios);
        this._general = new General(axios);
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

    get category(): Category {
        return this._category;
    }

    get general(): General {
        return this._general;
    }
}