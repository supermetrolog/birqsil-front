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
	link: Route.INDEX,
	exact: true,
  },
  {
	title: $i18n.t('Support'),
	link: Route.SUPPORT,
	exact: false,
  },
  {
	title: $i18n.t('Profile'),
	link: Route.PROFILE,
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