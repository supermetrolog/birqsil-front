import {NuxtApp} from "#app";
import CategoryServiceFactory from "~/domain/factories/CategoryServiceFactory";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            categoryService: CategoryServiceFactory.create(),
        }
    }
})