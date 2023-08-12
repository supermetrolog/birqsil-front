import {integer} from "vscode-languageserver-types";

export const uniqueArray = (array: any[]): any[] => {
    return array.filter(function(item: any, pos: integer, self: any[]): boolean {
        return self.indexOf(item) == pos;
    })
};