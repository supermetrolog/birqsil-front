import {NuxtApp} from "#app";
import UserServiceFactory from "~/domain/factories/UserServiceFactory";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            userService: UserServiceFactory.create(),
        }
    }
})