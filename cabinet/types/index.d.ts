import User from "../../common/domain/components/user/User";
import AuthService from "~/domain/services/AuthService";
import UserService from "~/domain/services/UserService";
import {Toast} from "~/plugins/toast";
import RestaurantService from "~/domain/services/RestaurantService";
import MenuService from "~/domain/services/MenuService";
import CategoryService from "~/domain/services/CategoryService";
import GeneralService from "~/domain/services/GeneralService";
declare module '#app' {
    interface NuxtApp {
        $user: User,
        $authService: AuthService,
        $userService: UserService,
        $restaurantService: RestaurantService,
        $menuService: MenuService,
        $categoryService: CategoryService,
        $generalService: GeneralService,
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
        $categoryService: CategoryService,
        $generalService: GeneralService,
    }
}
export { }