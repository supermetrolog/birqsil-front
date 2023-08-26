import {integer} from "vscode-languageserver-types";
import BaseEntity from "./BaseEntity";

class Unit extends BaseEntity {
    public id: integer;
    public value: string;
}

export default Unit;