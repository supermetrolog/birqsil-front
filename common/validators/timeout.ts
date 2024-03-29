import {integer} from "vscode-languageserver-types";
import WaitingHash from "../helpers/Hash";

function timeoutInternal(ms: integer): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const timeout = (delay: integer, fn: Function): Function => {
    let hash: string = '';

    return async (...values: any[]): Promise<boolean> => {
        hash = WaitingHash(new Date().getTime().toString())
        const localHash: string = hash;
        await timeoutInternal(delay);
        if (localHash === hash) {
            return await fn(...values);
        }

        return true;
    }
}

export default timeout;