<script setup lang="ts">
import {NuxtApp} from "#app";
import Route from "~/../enums/Route";
import {useBreadcrumbs} from "~/composables/breadcrumbs";

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
		<div class="d-flex flex-no-wrap align-center">
		  <div>
			BIRQSIL
		  </div>
		  <div class="breadcrumbs pl-5">
			<v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
		  </div>
		</div>
	
	  </v-app-bar-title>
	  <template #append>
		<v-btn icon="mdi mdi-account-tie" :to="Route.PROFILE"></v-btn>
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