<script setup lang="ts">

import Scenario from "~/../enums/Scenario";
import {NuxtApp, useRoute} from "#app";
import {RouteLocationNormalized} from "vue-router";
import {integer} from "vscode-languageserver-types";
import Category from "~/domain/entities/Category";
import CategoryForm from "~/components/domain/views/category/CategoryForm.vue";

const { $router, $categoryService }: NuxtApp = useNuxtApp();
const route: RouteLocationNormalized = useRoute();
const id: integer = +route.params.item
const category: Category = await $categoryService.getOne(id);

const updateHandler = () => {
  $router.push('/restaurant/' + category.restaurant_id);
}
</script>

<template>
  <v-card>
	<v-card-title>
	  {{$t('Update category')}}
	</v-card-title>
	<v-card-text>
	  <CategoryForm :scenario="Scenario.UPDATE" :updateCategory="category" @updated="updateHandler"/>
	</v-card-text>
  </v-card>
</template>