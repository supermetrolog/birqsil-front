<script setup lang="ts">

import RestaurantTable from "~/components/domain/base/restaurant/list/RestaurantTable.vue";
import Restaurant from "../../../../../common/domain/entities/Restaurant";
import {NuxtApp} from "#app";
import Modal from "../../../../../common/components/UI/Modal.vue";
import {Ref} from "vue";

const {$restaurantService, $i18n, $router}: NuxtApp = useNuxtApp();
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
  $router.push('/restaurant/update/' + restaurant.id);
}

const viewBtnClickHandler = (restaurant: Restaurant) => {
  $router.push('/restaurant/' + restaurant.id);
}

const openMenuBtnClickHandler = (restaurant: Restaurant) => {
  const routeData = $router.resolve('/menu/restaurant/' + restaurant.unique_name);
  window.open(routeData.href, '_blank');
}

</script>

<template>
  <div></div>
  <Modal ref="modal"/>
  <RestaurantTable
	  :restaurants="restaurants"
	  @clickDelete="deleteBtnClickHandler"
	  @clickUpdate="updateBtnClickHandler"
	  @clickView="viewBtnClickHandler"
	  @clickOpenMenu="openMenuBtnClickHandler"
  />
</template>

<style scoped lang="scss">

</style>