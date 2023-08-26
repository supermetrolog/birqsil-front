import {integer} from "vscode-languageserver-types";

const timeoutInternal: Function = async (value: any, delay: integer, fn: Function): Promise<any> => {
    let timeout;
    return new Promise(resolve => {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            return resolve(fn(value))
        }, delay)
    })
};

const timeout: Function = (delay: integer, fn: Function): Function => {
    return (value: any) => timeoutInternal(value, delay, fn);
}

export default timeout;