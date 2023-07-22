<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
	import {integer} from "vscode-languageserver-types";
import {RouteLocationNormalized} from "vue-router";
import MenuTableView from "~/components/domain/views/menu/MenuTableView.vue";
	
	const { $restaurantService }: NuxtApp = useNuxtApp();

	const route: RouteLocationNormalized = useRoute();
	const restaurantId: integer = +route.params.restaurant
	const restaurant = await $restaurantService.getOne(restaurantId);
</script>

<template>
  <v-card>
	<div class="d-flex flex-no-wrap justify-space-between">
	  <div>
		<v-card-title class="text-h5">
		  {{ restaurant.name }}
		</v-card-title>
		
		<v-card-subtitle>{{ restaurant.address }}</v-card-subtitle>
	  </div>
	  
	  <v-avatar
		  class="ma-3"
		  size="80"
		  rounded="0"
	  >
		<v-img :src="restaurant.qrcodeLink"></v-img>
	  </v-avatar>
	</div>
  </v-card>
  
  <v-card class="mt-4">
	<div class="d-flex flex-no-wrap justify-space-between">
	  <div>
		<v-card-title>{{$t('Menu items')}}</v-card-title>
	  </div>
	  
	  <v-card-actions>
		<v-btn
			class="ms-2"
			variant="outlined"
			size="small"
			:to="'/menu/create/' + restaurantId"
		>
		  {{$t('Create menu item')}}
		</v-btn>
	  </v-card-actions>
	</div>
	
	<v-card-text>
	  <MenuTableView :restaurantId="restaurant.id" />
	</v-card-text>
  </v-card>
  
  
</template>

<style scoped lang="scss">

</style>