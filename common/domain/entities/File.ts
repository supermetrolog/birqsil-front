import {integer} from "vscode-languageserver-types";
import BaseEntity from "common/domain/entities/BaseEntity";

class File extends BaseEntity {
    public created_at: string;
    public deleted_at: string;
    public extension: string;
    public id: integer;
    public real_name: string;
    public size: integer;
    public source_name: string;
    public type: string;
    public link: string;
}

export default File;