<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
	import {integer} from "vscode-languageserver-types";
import {RouteLocationNormalized} from "vue-router";
import MenuTableView from "~/components/domain/views/menu/MenuTableView.vue";
import {download} from "../../../common/helpers/File";
import RestaurantStatus from "../../../common/enums/RestaurantStatus";
import {Response} from "../../../common/domain/components/api/BaseApi";
import Restaurant from "../../../common/domain/entities/Restaurant";
import {Ref} from "vue";
import {useBreadcrumbs} from "~/composables/breadcrumbs";
import Route from "../../enums/Route";
import CategoryTableView from "~/components/domain/views/category/CategoryTableView.vue";

	const { $restaurantService, $i18n }: NuxtApp = useNuxtApp();
	
	const restaurant: Ref<Restaurant> = ref(null);
	
	const route: RouteLocationNormalized = useRoute();
	const restaurantId: integer = +route.params.restaurant

	restaurant.value = await $restaurantService.getOne(restaurantId);

	const clickChangeStatus = async () => {
	  let res: Response;
	  if (restaurant.value.status === RestaurantStatus.HIDDEN) {
		res = await $restaurantService.publish(restaurantId);
	  } else {
		res = await $restaurantService.hide(restaurantId);
	  }
	  
	  if (res.isOk()) {
		restaurant.value = await $restaurantService.getOne(restaurantId);
	  }
	}
	
	const breadcrumbs = useBreadcrumbs();
	breadcrumbs.value = [
	  {
		title: $i18n.t('Restaurants'),
		disabled: false,
		to: Route.INDEX
	  },
	  {
		title: restaurant.value.name,
		disabled: true,
		to: ''
	  }
	];
</script>

<template>
  <v-card>
	<div class="d-flex flex-no-wrap justify-space-between">
	  <div>
		<v-card-title class="text-h5 d-flex align-center">
		  {{ restaurant.name }}
		  <v-switch
			  class="ml-4"
			  v-model="restaurant.status"
			  :value="RestaurantStatus.PUBLISHED"
			  :false-value="RestaurantStatus.HIDDEN"
			  hide-details
			  inset
			  @click="clickChangeStatus"
		  ></v-switch>
		  <v-badge
			  :color="RestaurantStatus.badge(restaurant.status)"
			  :content="RestaurantStatus[restaurant.status]"
			  :inline="true"
		  ></v-badge>
		</v-card-title>
		
		<v-card-subtitle>{{ restaurant.address }}</v-card-subtitle>
	  </div>
	  <div class="qrcode">
		<v-avatar
			@click.prevent="download(restaurant.qrcodeLink, 'qrcode.png')"
			class="ma-3"
			rounded="0"
			size="80px"
		>
		  <v-img :src="restaurant.qrcodeLink" ></v-img>
		</v-avatar>
	  </div>
	</div>
  </v-card>
  
  <v-card class="mt-4">
	<div class="d-flex flex-no-wrap justify-space-between">
	  <div>
		<v-card-title>{{$t('Categories')}}</v-card-title>
	  </div>
	  
	  <v-card-actions>
		<v-btn
			class="ms-2"
			variant="outlined"
			size="small"
			:to="'/category/create/' + restaurantId"
		>
		  {{$t('Create category')}}
		</v-btn>
	  </v-card-actions>
	</div>
	
	<v-card-text>
	  <CategoryTableView :restaurantId="restaurant.id" />
	</v-card-text>
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
.qrcode {
  &:hover {
	cursor: pointer;
	transition: transform 0.1s ease-out;
	transform: scale(1.05);
  }
}
</style>