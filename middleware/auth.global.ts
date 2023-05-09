import {RouteLocation} from "vue-router";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import User from "~/domain/components/user/User";
import Route from "~/enums/Route";

export default defineNuxtRouteMiddleware((to: RouteLocation, from: RouteLocation): any => {
    const user: User = UserComponentFactory.create();

    const ignoreRoutes: string[] = [
        Route.AUTH_SIGNIN,
        Route.AUTH_SIGNUP
    ].map((el: string): string => '/' + el);

    if (ignoreRoutes.includes(to.path)) {
        if (!user.isGuest) {
            return navigateTo(Route.INDEX);
        }
        return;
    }

    if (user.isGuest) {
        return navigateTo(Route.AUTH_SIGNUP);
    }
})