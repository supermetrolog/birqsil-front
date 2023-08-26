import {integer} from "vscode-languageserver-types";

const timeout: Function = (delay: integer, fn: Function): Function => {
    let timeout;
    return (value: any) => new Promise(resolve => {
        clearTimeout(timeout)

        timeout = setTimeout(async () => {
            return resolve(await fn(value))
        }, delay)
    });
}

export default timeout;