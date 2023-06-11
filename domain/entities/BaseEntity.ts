class BaseEntity {
    constructor(config: Object = {}) {
        for (const configKey in config) {
            this[configKey] = config[configKey];
        }
    }
}

export default BaseEntity;