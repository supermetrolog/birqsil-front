<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import MenuItem from "~/domain/entities/MenuItem";
import Restaurant from "~/domain/entities/Restaurant";
import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";

const { $router, $menuService, $restaurantService, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const restaurantUniqueName: string = route.params.restaurant_unique_name.toString();
const restaurant: Restaurant = await $restaurantService.getOneByUniqueName(restaurantUniqueName);
const menuItems: MenuItem[] = await $menuService.getAll(restaurant.id, ['image']);

</script>

<template>
<div>
  <MenuSplit :items="menuItems" />
</div>
</template>

<style scoped lang="scss">

</style>