import {integer} from "vscode-languageserver-types";
import BaseEntity from "./BaseEntity";
import Category from "./Category";
import RestaurantStatus from "../../enums/RestaurantStatus";

class Restaurant extends BaseEntity {
    public id: integer;
    public name: string;
    public legal_name: string;
    public address: string;
    public status: integer;
    public created_at: string;
    public qrcodeLink: string;
    public unique_name: string;
    public categories: Category[];
}
export default Restaurant;