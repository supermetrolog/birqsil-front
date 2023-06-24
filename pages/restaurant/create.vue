<script setup lang="ts">

import RestaurantForm from "~/components/domain/views/restaurant/RestaurantForm.vue";
import Scenario from "~/enums/Scenario";
import {NuxtApp} from "#app";

const { $router }: NuxtApp = useNuxtApp();

const createdHandler = () => {
  $router.push('/');
}
</script>

<template>
	<RestaurantForm :scenario="Scenario.CREATE" @created="createdHandler"/>
</template>

<style scoped lang="scss">

</style>