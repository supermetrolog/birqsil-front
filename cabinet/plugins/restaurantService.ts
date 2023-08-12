import {NuxtApp} from "#app";
import RestaurantServiceFactory from "~/domain/factories/RestaurantServiceFactory";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            restaurantService: RestaurantServiceFactory.create(),
        }
    }
})