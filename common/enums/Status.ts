enum Status {
    ACTIVE = 9,
    INACTIVE = 10
}

namespace Status {
    export function badge(status: Status): string {
        const badges = {};
        badges[Status.ACTIVE] = 'success';
        badges[Status.INACTIVE] = 'error';

        return badges[status];
    }
}

export default Status