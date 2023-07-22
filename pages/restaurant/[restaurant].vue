<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
	import {integer} from "vscode-languageserver-types";
import {RouteLocationNormalized} from "vue-router";
	
	const { $restaurantService }: NuxtApp = useNuxtApp();

	const route: RouteLocationNormalized = useRoute();
	const restaurantId: integer = +route.params.restaurant
	const restaurant = await $restaurantService.getOne(restaurantId);
</script>

<template>
  <v-card>
	<v-card-title>{{ restaurant.name }}</v-card-title>
	<v-card-text>{{ restaurant.address }}</v-card-text>
	<v-card-item>
	  <v-img
		  :width="300"
		  aspect-ratio="16/9"
		  cover
		  :src="restaurant.qrcodeLink"
	  ></v-img>
	</v-card-item>
  </v-card>
</template>

<style scoped lang="scss">

</style>