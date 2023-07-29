<script setup lang="ts">
import {NuxtApp, useRoute, useState} from "#app";
import Route from "~/enums/Route";
import {RouteLocationNormalized} from "vue-router";
import {Breadcrumb, useBreadcrumbs} from "~/composables/breadcrumbs";

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
	title: $i18n.t('Support'),
	link: "/support",
	exact: false,
  }
];

const breadcrumbs = useBreadcrumbs();

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
	  <template #append>
		<v-btn icon="mdi-logout-variant" @click="signOutHandler"></v-btn>
	  </template>
	</v-app-bar>
	<v-navigation-drawer
		:elevation="2"
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
		<v-card class="mb-4 py-1" v-if="breadcrumbs.length">
		  <v-card-subtitle>
			<v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
		  </v-card-subtitle>
		</v-card>
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