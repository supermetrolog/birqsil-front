import {integer} from "vscode-languageserver-types";
import BaseEntity from "~/domain/entities/BaseEntity";
import File from "~/domain/entities/File";

class MenuItem extends BaseEntity {
    public id: integer;
    public title: string;
    public description: string;
    public restaurant_id: integer;
    public status: integer;
    public created_at: string;
    public updated_at: string;
    public file_id: integer;
    public image: File
}

export default MenuItem;