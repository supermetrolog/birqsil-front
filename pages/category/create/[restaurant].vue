<script setup lang="ts">

import Scenario from "~/enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import {integer} from "vscode-languageserver-types";
import CategoryForm from "~/components/domain/views/category/CategoryForm.vue";

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
	  {{$t('Create category')}}
	</v-card-title>
	<v-card-text>
	  <CategoryForm :restaurantId="restaurantId" :scenario="Scenario.CREATE" @created="createdHandler"/>
	</v-card-text>
  </v-card>
</template>