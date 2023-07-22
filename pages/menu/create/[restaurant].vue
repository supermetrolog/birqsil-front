<script setup lang="ts">

import RestaurantForm from "~/components/domain/views/restaurant/RestaurantForm.vue";
import Scenario from "~/enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import {integer} from "vscode-languageserver-types";
import MenuItemForm from "~/components/domain/views/menu/MenuItemForm.vue";

const { $router }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const restaurantId: integer = +route.params.restaurant
const createdHandler = () => {
  $router.push('/restaurant/' + restaurantId);
}
</script>

<template>
  <v-card>
	<v-card-title>
	  {{$t('Create menu item')}}
	</v-card-title>
	<v-card-text>
	  <MenuItemForm :restaurantId="restaurantId" :scenario="Scenario.CREATE" @created="createdHandler"/>
	</v-card-text>
  </v-card>
</template>