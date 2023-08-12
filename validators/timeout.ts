import {integer} from "vscode-languageserver-types";
import WaitingHash from "./../helpers/Hash";
function timeout(ms: integer): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default (delay: integer, fn: Function): Function => {
    let hash: string = '';

    return async (...values: any[]): Promise<boolean> => {
        hash = WaitingHash(new Date().getTime().toString())
        const localHash: string = hash;
        await timeout(delay);
        if (localHash === hash) {
            return await fn(...values);
        }

        return true;
    }
}