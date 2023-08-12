import Storage from "~/domain/components/storage/Storage";
import {useStorage} from "~/composables/storage";

export default class StorageFactory {
    private static storage: Storage;

    static create(): Storage {
        if (!this.storage) {
            this.storage = new Storage(useStorage());
        }
        return this.storage;
    }
}