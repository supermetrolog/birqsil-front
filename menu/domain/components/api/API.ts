import axios from "axios";
import Restaurant from "./Restaurant";

export default class API {
    public baseUrl: string;

    private readonly _restaurant: Restaurant

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.configureAxios();
        this._restaurant = new Restaurant(axios);
    }

    private configureAxios(): void {
        axios.defaults.baseURL = this.baseUrl;
    }

    get restaurant(): Restaurant {
        return this._restaurant;
    }
}