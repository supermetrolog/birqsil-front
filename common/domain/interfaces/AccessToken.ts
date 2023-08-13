import {integer} from "vscode-languageserver-types";

export default interface IAccessToken {
    token: string;
    expire: integer;
}