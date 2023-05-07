import {integer} from "vscode-languageserver-types";

export class StorageItem {
    constructor(
        public key: string,
        public data: unknown,
        public expire: integer
    )
    {
    }
}

export const useStorage = () => useState('storage', ():StorageItem[] => []);
