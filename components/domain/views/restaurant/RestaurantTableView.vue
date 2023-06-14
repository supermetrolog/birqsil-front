<script setup lang="ts">

import RestaurantTable from "~/components/domain/base/restaurant/list/RestaurantTable.vue";
import Restaurant from "~/domain/entities/Restaurant";
import {NuxtApp} from "#app";

const {$restaurantService}: NuxtApp = useNuxtApp();
const restaurants: Restaurant[] = await $restaurantService.getAllRestaurant();

</script>

<template>
  <RestaurantTable :restaurants="restaurants"/>
</template>

<style scoped lang="scss">

</style>