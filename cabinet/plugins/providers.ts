import {NuxtApp} from "#app";
import AuthServiceFactory from "~/domain/factories/AuthServiceFactory";
import CategoryServiceFactory from "~/domain/factories/CategoryServiceFactory";
import MenuServiceFactory from "~/domain/factories/MenuServiceFactory";
import RestaurantServiceFactory from "~/domain/factories/RestaurantServiceFactory";
import UserServiceFactory from "~/domain/factories/UserServiceFactory";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import GeneralServiceFactory from "~/domain/factories/GeneralServiceFactory";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            authService: AuthServiceFactory.create(),
            categoryService: CategoryServiceFactory.create(),
            menuService: MenuServiceFactory.create(),
            restaurantService: RestaurantServiceFactory.create(),
            userService: UserServiceFactory.create(),
            user: UserComponentFactory.create(),
            generalService: GeneralServiceFactory.create(),
        }
    }
})