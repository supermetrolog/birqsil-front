import {integer} from "vscode-languageserver-types";
import BaseEntity from "./BaseEntity";
import MenuItem from "./MenuItem";

class Category extends BaseEntity {
    public id: integer;
    public name: string;
    public restaurant_id: integer;
    public ordering: integer;
    public created_at: string;
    public updated_at: string;
    public menuItems: MenuItem[]
}
export default Category;