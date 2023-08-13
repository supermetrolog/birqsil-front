class BaseEntity {
    constructor(config: Record<string, any> = {}) {
        for (const configKey in config) {
            this[configKey as keyof this] = config[configKey];
        }
    }
}

export default BaseEntity;