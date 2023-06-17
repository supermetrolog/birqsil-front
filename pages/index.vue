<template>
  <Card>
	<div class="title">
	  <h3>{{ $t('Restaurant list') }}</h3>
	</div>
	<RestaurantTableView />
  </Card>
</template>

<script setup lang="ts">
import Card from "~/components/UI/card/Card.vue";
import RestaurantTableView from "~/components/domain/views/restaurant/RestaurantTableView.vue";
</script>

<style scoped>

</style>