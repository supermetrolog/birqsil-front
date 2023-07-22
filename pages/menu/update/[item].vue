<script setup lang="ts">

import RestaurantForm from "~/components/domain/views/restaurant/RestaurantForm.vue";
import Scenario from "~/enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import {integer} from "vscode-languageserver-types";
import MenuItemForm from "~/components/domain/views/menu/MenuItemForm.vue";
import MenuItem from "~/domain/entities/MenuItem";

const { $router, $menuService }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const menuItemId: integer = +route.params.item
const menuItem: MenuItem = await $menuService.getOne(menuItemId);
const updateHandler = () => {
  $router.push('/restaurant/' + menuItem.restaurant_id);
}
</script>

<template>
  <v-card>
	<v-card-title>
	  {{$t('Update menu item')}}
	</v-card-title>
	<v-card-text>
	  <MenuItemForm :scenario="Scenario.UPDATE" :updateMenuItem="menuItem" @updated="updateHandler"/>
	</v-card-text>
  </v-card>
</template>