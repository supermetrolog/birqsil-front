<script setup lang="ts">
import {RouteLocationNormalized} from "vue-router";
import {NuxtApp, useRoute} from "#app";
import {integer} from "vscode-languageserver-types";
import MenuItem from "../../../common/domain/entities/MenuItem";
import {useBreadcrumbs} from "~/composables/breadcrumbs";
import Route from "../../enums/Route";

const { $menuService, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const menuItemId: integer = +route.params.item
const menuItem: MenuItem = await $menuService.getOne(menuItemId, ['image']);

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
	title: menuItem.title,
	disabled: true,
	to: ''
  }
];
</script>

<template>
  <v-card density="compact" width="400">
	<v-avatar
		v-if="menuItem.image"
		size="100%"
		rounded="0"
	>
	  <v-img :src="menuItem.image.link"></v-img>
	</v-avatar>
	<div class="pb-5 pt-2">
	  <v-card-title class="text-h5">
		{{ menuItem.title }}
	  </v-card-title>
	  
	  <v-card-subtitle>{{ menuItem.description }}</v-card-subtitle>
	</div>
  </v-card>
</template>

<style scoped lang="scss">

</style>