import {RouteLocation} from "vue-router";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import User from "../../common/domain/components/user/User";
import Route from "../../common/enums/Route";

export default defineNuxtRouteMiddleware(async (to: RouteLocation, from: RouteLocation): Promise<any> => {
    const user: User = UserComponentFactory.create();
    await user.init()

    const ignoreRoutes: string[] = [
        Route.AUTH_SIGNIN,
        Route.AUTH_SIGNUP
    ];

    if (ignoreRoutes.includes(to.path)) {
        if (!user.isGuest) {
            return navigateTo(Route.INDEX);
        }
        return;
    }

    if (user.isGuest) {
        return navigateTo(Route.AUTH_SIGNIN);
    }
})