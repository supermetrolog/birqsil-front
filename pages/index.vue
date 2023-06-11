<template>
  <Card>
	<div class="title">
	  <h3>{{ $t('Restaurant list') }}</h3>
	</div>
	<RestaurantTable />
  </Card>
</template>

<script setup lang="ts">

import Card from "~/components/UI/card/Card.vue";
</script>

<style scoped>

</style>