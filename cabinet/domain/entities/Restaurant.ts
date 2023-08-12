import {integer} from "vscode-languageserver-types";
import BaseEntity from "~/domain/entities/BaseEntity";
import Category from "~/domain/entities/Category";

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