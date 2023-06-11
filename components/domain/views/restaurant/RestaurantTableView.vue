<script setup lang="ts">

import RestaurantTable from "~/components/domain/base/restaurant/list/RestaurantTable.vue";
import Restaurant from "~/domain/entities/Restaurant";

const restaurants = [];
restaurants.push(new Restaurant({
  id: 12,
  name: 'Birqsil',
  address: 'Moscow, Lenina street',
  status: 10,
  created_at: '2023-06-11 22:12:13'
}));

restaurants.push(new Restaurant({
  id: 22,
  name: 'Selfie',
  address: 'Saint-Petersburg , Lenina street',
  status: 10,
  created_at: '2023-05-2 22:12:13'
}));
</script>

<template>
  <RestaurantTable :restaurants="restaurants"/>
</template>

<style scoped lang="scss">

</style>