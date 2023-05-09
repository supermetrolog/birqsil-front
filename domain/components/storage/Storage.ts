import {integer} from "vscode-languageserver-types";
import {StorageItem} from "~/composables/storage";
import {Ref} from "vue";

export default class Storage {
    private readonly vuexStorage: Ref<StorageItem[]>;
    private readonly localStorage;
    constructor(storage: Ref<StorageItem[]>) {
        this.vuexStorage = storage
        this.localStorage = window.localStorage;
        this.refreshVuex();
    }
    private refreshVuex(): void {
        for (const key in this.localStorage) {
            let item = this.localStorage.getItem(key);
            item = JSON.parse(item);
            if (item instanceof Object) {
                this.setVuex(new StorageItem(item.key, item.data, item.expire));
            }
        }
    }
    public set(key: string, data: unknown, expire: integer = 0): void {
        if (expire < 0) {
            throw new Error('Expire cannot be less zero');
        }
        const item: StorageItem = new StorageItem(key, data, expire);

        this.setVuex(item);
        if (item.expire !== 0) {
            this.setLocalStorage(item);
        }
    }
    private setVuex(item: StorageItem): void {
        this.vuexStorage.value.push(item);
    }
    private setLocalStorage(item: StorageItem): void {
        const localStorageData = {
            key: item.key,
            data: item.data,
            expire: item.expire
        };
        console.log(localStorageData);
        this.localStorage.setItem(item.key, JSON.stringify(localStorageData));
    }

    public remove(key: string): void {
        this.vuexStorage.value = this.vuexStorage.value.filter((el: StorageItem) => el.key !== key);
        this.localStorage.removeItem(key);
    }

    public exists(key: string): boolean {
        return !!this.vuexStorage.value.find((el: StorageItem) => el.key === key);
    }

    public get(key: string): StorageItem|null {
        return this.vuexStorage.value.find((el: StorageItem) => el.key === key);
    }
}