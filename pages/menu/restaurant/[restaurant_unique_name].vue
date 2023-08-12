<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import MenuItem from "~/domain/entities/MenuItem";
import Restaurant from "~/domain/entities/Restaurant";
import SplitListWithNav from "~/components/domain/base/menu/split-list-with-nav/SplitListWithNav.vue";
import {Ref} from "vue";
import {CartAction, useCart} from "~/composables/front/card";
import {RestaurantAction, useRestaurant} from "~/composables/front/restaurant";

definePageMeta({
  layout: 'menu'
});

const { $router, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const restaurantUniqueName: string = route.params.restaurant_unique_name.toString();

await RestaurantAction.fetch(restaurantUniqueName);

const restaurant: Ref<Restaurant|null> = useRestaurant();
const cart: Ref<MenuItem[]> = useCart();
</script>

<template>
<div>
  <SplitListWithNav
	  :categories="restaurant.categories"
	  :selectedMenuItems="cart"
	  @clickMinus="(item: MenuItem): void => CartAction.remove(item)"
	  @clickPlus="(item: MenuItem): void => CartAction.add(item)"
  />
</div>
</template>

<style scoped lang="scss">

</style>