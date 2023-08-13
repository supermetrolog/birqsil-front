import {Toast} from "~/plugins/toast";
import RestaurantService from "../domain/services/RestaurantService";
declare module '#app' {
    interface NuxtApp {
        $restaurantService: RestaurantService,
        $toast: Toast
    }
}
declare module 'vue' {
    interface ComponentCustomProperties {
        $restaurantService: RestaurantService,
        $toast: Toast
    }
}
export { }