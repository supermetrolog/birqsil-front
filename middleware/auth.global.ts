import {RouteLocation} from "vue-router";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import User from "~/domain/components/user/User";

export default defineNuxtRouteMiddleware((to: RouteLocation, from: RouteLocation): any => {
    const user: User = UserComponentFactory.create();

    const ignoreRoutes: string[] = [
        '/auth/signup',
        '/auth/signin',
    ];

    if (ignoreRoutes.includes(to.path)) {
        if (!user.isGuest) {
            return navigateTo('/');
        }
        return;
    }

    if (user.isGuest) {
        return navigateTo('/auth/signup');
    }
})