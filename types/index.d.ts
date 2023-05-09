import User from "~/domain/components/user/User";
import AuthService from "~/domain/services/AuthService";
import UserService from "~/domain/services/UserService";

declare module '#app' {
    interface NuxtApp {
        $user: User,
        $authService: AuthService,
        $userService: UserService
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