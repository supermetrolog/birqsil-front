<script setup lang="ts">

import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import {PropType} from "@vue/runtime-core";
import Category from "~/domain/entities/Category";

interface IProps {
  categories: Category[],
}

const {items}: IProps = defineProps({
  categories: {
	type: Object as PropType<Category[]>,
	required: true
  }
});

</script>

<template>
  <div v-for="(category, idx) in categories" :key="category.id">
	<h2 :class="{'pt-4': idx !== 0}">{{category.name}}</h2>
	
	<MenuSplit :items="category.menuItems" />
  </div>
</template>

<style scoped lang="scss">

</style>