import {NuxtApp} from "#app";
import MenuServiceFactory from "~/domain/factories/MenuServiceFactory";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            menuService: MenuServiceFactory.create(),
        }
    }
})