<script setup lang="ts">
import {NuxtApp} from "#app";
import Route from "~/enums/Route";
import {Ref} from "vue";
import MenuItem from "~/domain/entities/MenuItem";
import {useCart} from "~/composables/card";

const {$router, $i18n}: NuxtApp = useNuxtApp();

const cart: Ref<MenuItem[]> = useCart();

</script>
<template>
  <v-app>
	<v-app-bar :elevation="2">
	  <v-app-bar-title>
			BIRQSIL
	  </v-app-bar-title>
	  <template #append>
		<v-badge
			:content="cart.length"
			color="error"
			v-if="cart.length"
		>
		  <v-btn icon="mdi mdi-cart-outline" :to="Route.PROFILE"></v-btn>
		</v-badge>
	  </template>
	</v-app-bar>
	<v-main class="content">
	  <v-container fluid>
		<slot />
	  </v-container>
	</v-main>
  </v-app>
</template>

<style scoped lang="scss">
.content {
  background-color: $color_light;
}
.breadcrumbs {
  font-size: 14px;
}
</style>