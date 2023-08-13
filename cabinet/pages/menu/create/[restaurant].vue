<script setup lang="ts">

import Scenario from "../../../../common/enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import {integer} from "vscode-languageserver-types";
import MenuItemForm from "~/components/domain/views/menu/MenuItemForm.vue";
import {useBreadcrumbs} from "~/composables/breadcrumbs";
import Route from "../../../enums/Route";

const { $router, $i18n }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const restaurantId: integer = +route.params.restaurant

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
	title: $i18n.t('Restaurants'),
	disabled: false,
	to: '/'
  },
  {
	title: $i18n.t('Restaurant') + ' #' + restaurantId,
	disabled: false,
	to: Route.RESTAURANT + restaurantId
  },
  {
	title: $i18n.t('Create Form'),
	disabled: true,
	to: ''
  }
];

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