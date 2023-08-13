enum RestaurantStatus {
    HIDDEN = 9,
    PUBLISHED = 10,
    DELETED = 11
}

namespace RestaurantStatus {
    export function badge(status: RestaurantStatus): string {
        const badges = {};
        badges[RestaurantStatus.PUBLISHED] = 'success';
        badges[RestaurantStatus.HIDDEN] = 'error';

        return badges[status];
    }
}

export default RestaurantStatus