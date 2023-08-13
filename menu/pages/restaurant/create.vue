<script setup lang="ts">

import RestaurantForm from "~/components/domain/views/restaurant/RestaurantForm.vue";
import Scenario from "~/../enums/Scenario";
import {NuxtApp} from "#app";

const { $router }: NuxtApp = useNuxtApp();

const createdHandler = () => {
  $router.push('/');
}
</script>

<template>
  	<v-card>
	  <v-card-title>
		{{$t('Create restaurant')}}
	  </v-card-title>
	  <v-card-text>
		<RestaurantForm :scenario="Scenario.CREATE" @created="createdHandler"/>
	  </v-card-text>
	</v-card>
</template>