import {NuxtApp, useState} from "#app";
import {Ref} from "vue";
import Restaurant from "../../common/domain/entities/Restaurant";

export const useRestaurant = () => useState<Restaurant|null>('restaurant', (): Restaurant|null => null);

interface IRestaurantAction {
    fetch(restaurantUniqueName: string): Promise<Ref<Restaurant>>;
}

export const RestaurantAction: IRestaurantAction = {
    fetch: async (restaurantUniqueName: string): Promise<Ref<Restaurant | null>> => {
        const { $restaurantService }: NuxtApp = useNuxtApp();
        const restaurant: Ref<Restaurant|null> = useRestaurant();

        console.log(restaurant.value);
        if (restaurant.value) {
            return restaurant;
        }

        restaurant.value = await $restaurantService.getOneByUniqueName(restaurantUniqueName);
        return restaurant;
    },
}