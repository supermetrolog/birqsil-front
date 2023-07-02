<script setup lang="ts">
import {NuxtApp, useRoute} from "#app";
import Route from "~/enums/Route";
import {RouteLocationNormalized} from "vue-router";

const {$router, $user, $i18n}: NuxtApp = useNuxtApp();
interface Link {
  title: string,
  link: string,
  exact: boolean
}
const links: Link[] = [
  {
	title: $i18n.t('Restaurants'),
	link: "/",
	exact: true,
  },
  {
	title: $i18n.t('Menu'),
	link: "/menu",
	exact: false,
  },
  {
	title: $i18n.t('Support'),
	link: "/support",
	exact: false,
  }
];
const signOutHandler = () => {
  $user.logout();
  $router.push(Route.AUTH_SIGNIN);
};
</script>
<template>
  <v-app>
	<v-app-bar :elevation="2">
	  <v-app-bar-title>
		BIRQSIL
	  </v-app-bar-title>
	  <template v-slot:append>
		<v-btn icon="mdi-logout-variant" @click="signOutHandler"></v-btn>
	  </template>
	</v-app-bar>
	<v-navigation-drawer
		:elevation="2"
		:permanent="true"
		:width="200"
	>
	  <v-list density="compact">
		<v-list-item
			v-for="item in links"
			:key="item.link"
			:title="item.title"
			:to="item.link"
			:exact="item.exact"
			density="compact"
		/>
	  </v-list>
	</v-navigation-drawer>
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
</style>