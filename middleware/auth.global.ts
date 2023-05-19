import {RouteLocation} from "vue-router";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import User from "~/domain/components/user/User";
import Route from "~/enums/Route";
import {Request} from "node-fetch";

export default defineNuxtRouteMiddleware(async (to: RouteLocation, from: RouteLocation): Promise<any> => {
    console.log('AAAAAAAAAAAAAa', process.client, process.server);

    const user: User = UserComponentFactory.create();
    const res = await useFetch(async (req) => {
        console.log("REQ", req);
        await user.init(req)
    });
    
    console.log(user.isGuest, user.identity?.email);
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