<script setup lang="ts">

import {RouteLocationNormalized} from "vue-router";
import {NuxtApp, useRoute} from "#app";
import MenuItem from "../../common/domain/entities/MenuItem";
import {CartAction, useCart} from "~/composables/card";
import SplitListWithNav from "~/components/domain/base/menu/split-list-with-nav/SplitListWithNav.vue";
import {RestaurantAction, useRestaurant} from "~/composables/restaurant";
import {Ref} from "vue";
import Restaurant from "../../common/domain/entities/Restaurant";

const { $router, $i18n }: NuxtApp = useNuxtApp();

const url = useRequestURL();
const title = $i18n.t('MENU');

useSeoMeta({
  title: title
})

const route: RouteLocationNormalized = useRoute();
const restaurantUniqueName: string = 'vlV2FudFj2JQgX50SETxC7vkoYsCcuwi'

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


<style scoped>

</style>