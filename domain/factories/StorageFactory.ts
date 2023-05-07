import Storage from "~/domain/components/storage/Storage";

export default class StorageFactory {
    private static storage: Storage;

    static create(): Storage {
        if (!this.storage) {
            this.storage = new Storage();
        }
        return this.storage;
    }
}