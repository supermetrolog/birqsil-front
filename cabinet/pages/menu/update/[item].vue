<script setup lang="ts">

import Scenario from "../../../../common/enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import {integer} from "vscode-languageserver-types";
import MenuItemForm from "~/components/domain/views/menu/MenuItemForm.vue";
import MenuItem from "../../../../common/domain/entities/MenuItem";
import {useBreadcrumbs} from "~/composables/breadcrumbs";
import Route from "../../../enums/Route";

const { $router, $menuService, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const menuItemId: integer = +route.params.item
const menuItem: MenuItem = await $menuService.getOne(menuItemId);

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
	title: $i18n.t('Restaurants'),
	disabled: false,
	to: '/'
  },
  {
	title: $i18n.t('Restaurant') + ' #' + menuItem.restaurant_id,
	disabled: false,
	to: Route.RESTAURANT + menuItem.restaurant_id
  },
  {
	title: $i18n.t('Update') + ': ' + menuItem.title,
	disabled: true,
	to: ''
  }
];

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