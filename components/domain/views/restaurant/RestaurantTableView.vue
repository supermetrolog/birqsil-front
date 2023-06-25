<script setup lang="ts">

import RestaurantTable from "~/components/domain/base/restaurant/list/RestaurantTable.vue";
import Restaurant from "~/domain/entities/Restaurant";
import {NuxtApp} from "#app";
import Modal from "~/components/UI/Modal.vue";

const { $restaurantService, $i18n }: NuxtApp = useNuxtApp();
const restaurants: Restaurant[] = await $restaurantService.getAllRestaurant();

let modal: Modal = ref(null);
const deleteBtnClickHandler = async (restaurant: Restaurant) => {
  const isConfirmed: boolean = await modal.value.open({
	message: $i18n.t("You really want delete restaurant with name:") + " " + restaurant.name + "?",
  })
  
  if (isConfirmed) {
	$restaurantService.delete(restaurant);
  }
}

</script>

<template>
  <div></div>
  <Modal ref="modal" />
  <RestaurantTable :restaurants="restaurants" @clickDelete="deleteBtnClickHandler" />
</template>

<style scoped lang="scss">

</style>