import {integer} from "vscode-languageserver-types";
import BaseEntity from "~/domain/entities/BaseEntity";

class Category extends BaseEntity {
    public id: integer;
    public name: string;
    public restaurant_id: integer;
    public ordering: integer;
    public created_at: string;
    public updated_at: string;
}
export default Category;