<script setup lang="ts">
import RestaurantTableView from "~/components/domain/views/restaurant/RestaurantTableView.vue";
const { $i18n } = useNuxtApp();

useSeoMeta({
  title: $i18n.t('Restaurant list')
})
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