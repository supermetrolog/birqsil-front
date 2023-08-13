import {integer} from "vscode-languageserver-types";
import BaseEntity from "./BaseEntity";
import File from "./File";
import Category from "./Category";

class MenuItem extends BaseEntity {
    public id: integer;
    public title: string;
    public description: string;
    public restaurant_id: integer;
    public category_id: integer;
    public status: integer;
    public created_at: string;
    public updated_at: string;
    public file_id: integer;
    public image: File;
    public category: Category;
}

export default MenuItem;