<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import MenuItem from "~/domain/entities/MenuItem";
import Restaurant from "~/domain/entities/Restaurant";
import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import SplitListWithNav from "~/components/domain/base/menu/split-list-with-nav/SplitListWithNav.vue";
import {Ref} from "vue";
import {Card, ICard, useCart} from "~/composables/card";
import {ca} from "vuetify/locale";

definePageMeta({
  layout: 'menu'
});

const { $router, $restaurantService, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const restaurantUniqueName: string = route.params.restaurant_unique_name.toString();
const restaurant: Restaurant = await $restaurantService.getOneByUniqueName(restaurantUniqueName);

const cart: Ref<MenuItem[]> = useCart();

const clickMinusHandle = (item: MenuItem): void => {
  	const lastItemIndex = cart.value.findLastIndex((mItem: MenuItem) => mItem.id === item.id);
  	cart.value = cart.value.filter((_, idx) => idx !== lastItemIndex);
}

const clickPlusHandle = (item: MenuItem): void => {
	cart.value.push(item);
}
</script>

<template>
<div>
  <SplitListWithNav
	  :categories="restaurant.categories"
	  :selectedMenuItems="cart"
	  @clickMinus="clickMinusHandle"
	  @clickPlus="clickPlusHandle"
  />
</div>
</template>

<style scoped lang="scss">

</style>