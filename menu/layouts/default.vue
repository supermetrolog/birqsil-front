<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
import {Ref} from "vue";
import {useCart} from "~/composables/card";
import {RouteLocationNormalized} from "vue-router";
import MenuItem from "../../common/domain/entities/MenuItem";
import Route from "~/enums/Route";

const {$router, $i18n}: NuxtApp = useNuxtApp();

const route: RouteLocationNormalized = useRoute();

const cart: Ref<MenuItem[]> = useCart();

const clickBackToMenuHandle = () => {
  $router.back();
}

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
			v-if="cart.length && route.path !== Route.CART"
		>
		  <v-btn icon="mdi mdi-cart-outline" :to="Route.CART"></v-btn>
		</v-badge>
		<v-btn icon="mdi mdi-close" @click="clickBackToMenuHandle" v-if="route.path === Route.CART"></v-btn>
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