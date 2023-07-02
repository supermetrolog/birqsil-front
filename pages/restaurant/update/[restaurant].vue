<script setup lang="ts">

import RestaurantForm from "~/components/domain/views/restaurant/RestaurantForm.vue";
import Scenario from "~/enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import Restaurant from "~/domain/entities/Restaurant";
import {integer} from "vscode-languageserver-types";

const {$router, $restaurantService}: NuxtApp = useNuxtApp();

const route: RouteLocationNormalized = useRoute();
const restaurantId: integer = +route.params.restaurant
const restaurant: Restaurant = await $restaurantService.getOne(restaurantId);
const updateHandler = () => {
  $router.push('/');
}
</script>

<template>
  
  <v-card>
	<v-card-title>
	  {{ $t('Update restaurant') }}
	</v-card-title>
	<v-card-text>
	  <RestaurantForm :scenario="Scenario.UPDATE" @updated="updateHandler" :updateRestaurant="restaurant"/>
	</v-card-text>
  </v-card>
</template>