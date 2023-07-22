import {integer} from "vscode-languageserver-types";
import BaseEntity from "~/domain/entities/BaseEntity";

class Restaurant extends BaseEntity {
    public id: integer;
    public name: string;
    public legal_name: string;
    public address: string;
    public status: integer;
    public created_at: string;
    public qrcodeLink: string;
}
export default Restaurant;