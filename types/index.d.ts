import User from "~/domain/components/user/User";
import AuthService from "~/domain/services/AuthService";
import UserService from "~/domain/services/UserService";
import {Toast} from "~/plugins/toast";
import RestaurantService from "~/domain/services/RestaurantService";
import MenuService from "~/domain/services/MenuService";
declare module '#app' {
    interface NuxtApp {
        $user: User,
        $authService: AuthService,
        $userService: UserService,
        $restaurantService: RestaurantService,
        $menuService: MenuService,
        $toast: Toast
    }
}
declare module 'vue' {
    interface ComponentCustomProperties {
        $user: User,
        $authService: AuthService,
        $userService: UserService
        $restaurantService: RestaurantService,
        $menuService: MenuService,
    }
}
export { }