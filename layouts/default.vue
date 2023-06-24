<script setup lang="ts">
  import {NuxtApp} from "#app";
  import Route from "~/enums/Route";
  
  const {$router, $user}: NuxtApp = useNuxtApp();
  
  const signOutHandler = () => {
	$user.logout();
	$router.push(Route.AUTH_SIGNIN);
  };
</script>
<template>
  <v-app class="app">
	<v-app-bar :elevation="2">
	  <v-app-bar-title>
		BIRQSIL
	  </v-app-bar-title>
	  <template v-slot:append>
		<v-btn icon="mdi-heart"></v-btn>
		
		<v-btn icon="mdi-magnify"></v-btn>
		
		<v-btn icon="mdi-logout-variant" @click="signOutHandler"></v-btn>
	  </template>
	</v-app-bar>
	<v-container>
	  <v-row>
		<slot />
	  </v-row>
	</v-container>
  </v-app>
</template>

<style scoped lang="scss">
	.app {
	  padding-top: 80px;
	}
</style>