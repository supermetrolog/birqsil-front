<script setup lang="ts">
import RestaurantTableView from "~/components/domain/views/restaurant/RestaurantTableView.vue";
const { $i18n } = useNuxtApp();

useSeoMeta({
  title: $i18n.t('Restaurant list')
})
</script>

<template>
  <v-card
	  class="mx-auto"
  >
	<v-card-title class="text-h6 font-weight-regular justify-space-between">
	  <span>{{ $t('Restaurant list') }}</span>
	</v-card-title>
	<RestaurantTableView />
  </v-card>
</template>


<style scoped>

</style>