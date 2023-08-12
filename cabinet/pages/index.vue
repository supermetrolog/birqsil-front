<script setup lang="ts">
import RestaurantTableView from "~/components/domain/views/restaurant/RestaurantTableView.vue";
import {useBreadcrumbs} from "~/composables/breadcrumbs";

const { $i18n } = useNuxtApp();

const title = $i18n.t('Restaurant list');

useSeoMeta({
  title: title
})

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
	title: title,
	disabled: true,
	to: ''
  }
];

</script>

<template>
  <v-card>
	<div class="d-flex flex-no-wrap justify-space-between">
	  <div>
		<v-card-title>{{$t('Restaurants')}}</v-card-title>
	  </div>
	  
	  <v-card-actions>
		<v-btn
			class="ms-2"
			variant="outlined"
			size="small"
			to="restaurant/create"
		>
		  {{$t('Create restaurant')}}
		</v-btn>
	  </v-card-actions>
	</div>
	<v-card-text>
	  <RestaurantTableView />
	</v-card-text>
  </v-card>
</template>


<style scoped>

</style>