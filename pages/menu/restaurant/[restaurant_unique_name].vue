<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import MenuItem from "~/domain/entities/MenuItem";
import Restaurant from "~/domain/entities/Restaurant";
import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import SplitListWithNav from "~/components/domain/base/menu/split-list-with-nav/SplitListWithNav.vue";
import {Ref} from "vue";
import {Card, ICard, useCard} from "~/composables/card";
import {ca} from "vuetify/locale";

definePageMeta({
  layout: 'menu'
});

const { $router, $restaurantService, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const restaurantUniqueName: string = route.params.restaurant_unique_name.toString();
const restaurant: Restaurant = await $restaurantService.getOneByUniqueName(restaurantUniqueName);

const card: Ref<MenuItem[]> = useCard();

const clickMinusHandle = (item: MenuItem): void => {
	// card.value = card.value.filter((mItem: MenuItem) => mItem.id !== item.id)
  	const lastItemIndex = card.value.findLastIndex((mItem: MenuItem) => mItem.id === item.id);
  	card.value = card.value.filter((_, idx) => idx !== lastItemIndex);
}

const clickPlusHandle = (item: MenuItem): void => {
	card.value.push(item);
}
</script>

<template>
<div>
  <SplitListWithNav
	  :categories="restaurant.categories"
	  :selectedMenuItems="card"
	  @clickMinus="clickMinusHandle"
	  @clickPlus="clickPlusHandle"
  />
</div>
</template>

<style scoped lang="scss">

</style>