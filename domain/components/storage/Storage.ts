import {integer} from "vscode-languageserver-types";
import {StorageItem, useStorage} from "~/composables/storage";
import {Ref} from "vue";

export default class Storage {
    private storage: Ref<StorageItem[]>;
    constructor() {
        this.storage = useStorage();
    }
    public set(key: string, data: unknown, expire: integer): void {
        this.setLocalStorage(new StorageItem(key, data, expire));
    }

    private setLocalStorage(item: StorageItem): void {
        this.storage.value.push(item);
    }

    public remove(key: string): void {
        this.storage.value = this.storage.value.filter((el: StorageItem) => el.key !== key);
    }

    public exists(key: string): boolean {
        return !!this.storage.value.find((el: StorageItem) => el.key === key);
    }

    public get(key: string): StorageItem|null {
        return this.storage.value.find((el: StorageItem) => el.key === key);
    }
}