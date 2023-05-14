import User from "~/domain/components/user/User";
import AuthService from "~/domain/services/AuthService";
import UserService from "~/domain/services/UserService";
import {Toast} from "~/plugins/toast";
declare module '#app' {
    interface NuxtApp {
        $user: User,
        $authService: AuthService,
        $userService: UserService,
        $toast: Toast
    }
}
declare module 'vue' {
    interface ComponentCustomProperties {
        $user: User,
        $authService: AuthService,
        $userService: UserService
    }
}
export { }