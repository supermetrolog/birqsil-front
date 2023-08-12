import {NuxtApp} from "#app";
import AuthServiceFactory from "~/domain/factories/AuthServiceFactory";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            authService: AuthServiceFactory.create(),
        }
    }
})