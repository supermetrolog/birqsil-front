import {integer} from "vscode-languageserver-types";
import BaseEntity from "~/domain/entities/BaseEntity";
import MenuItem from "~/domain/entities/MenuItem";

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