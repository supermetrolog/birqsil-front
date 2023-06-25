<script setup lang="ts">

import RestaurantTable from "~/components/domain/base/restaurant/list/RestaurantTable.vue";
import Restaurant from "~/domain/entities/Restaurant";
import {NuxtApp} from "#app";
import Modal from "~/components/UI/Modal.vue";
import {Ref} from "vue";

const { $restaurantService, $i18n, $router }: NuxtApp = useNuxtApp();
const restaurants: Ref<Restaurant[]> = ref(await $restaurantService.getAll());

let modal: Modal = ref(null);
const deleteBtnClickHandler = async (restaurant: Restaurant) => {
  const isConfirmed: boolean = await modal.value.open({
	message: $i18n.t("You really want delete restaurant with name:") + " " + restaurant.name + "?",
  })
  
  if (!isConfirmed) {
	return;
  }
  
  if (await $restaurantService.delete(restaurant)) {
	restaurants.value = restaurants.value.filter((item: Restaurant) => item.id !== restaurant.id);
  }
}

const updateBtnClickHandler = (restaurant: Restaurant) => {
  $router.push('restaurant/update/' + restaurant.id);
}

</script>

<template>
  <div></div>
  <Modal ref="modal" />
  <RestaurantTable :restaurants="restaurants" @clickDelete="deleteBtnClickHandler" @clickUpdate="updateBtnClickHandler" />
</template>

<style scoped lang="scss">

</style>