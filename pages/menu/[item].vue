<script setup lang="ts">
import {RouteLocationNormalized} from "vue-router";
import {NuxtApp, useRoute} from "#app";
import {integer} from "vscode-languageserver-types";
import MenuItem from "~/domain/entities/MenuItem";

const { $menuService }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const menuItemId: integer = +route.params.item
const menuItem: MenuItem = await $menuService.getOne(menuItemId, ['image']);
</script>

<template>
  <v-card>
	<div class="d-flex flex-no-wrap justify-space-between">
	  <div>
		<v-card-title class="text-h5">
		  {{ menuItem.title }}
		</v-card-title>
		
		<v-card-subtitle>{{ menuItem.description }}</v-card-subtitle>
	  </div>
	  <div>
		<v-card-text>
		  {{menuItem.status}}
		</v-card-text>
		<v-card-text>
		  {{menuItem.file_id}}
		</v-card-text>
	  </div>
	</div>
  </v-card>
</template>

<style scoped lang="scss">

</style>