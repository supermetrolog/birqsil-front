<script setup lang="ts">

import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import {PropType} from "@vue/runtime-core";
import Category from "../../../../../../common/domain/entities/Category";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import MenuSplitItem from "~/components/domain/base/menu/split-list/MenuSplitItem.vue";

interface IProps {
  categories: Category[],
  selectedMenuItems: MenuItem[],
}

const {categories, selectedMenuItems}: IProps = defineProps({
  categories: {
	type: Array as PropType<Category[]>,
	required: true
  },
  selectedMenuItems: {
	type: Array as PropType<MenuItem[]>
  }
});

const emit = defineEmits(['clickPlus', 'clickMinus']);

</script>

<template>
  <div v-for="(category, idx) in categories" :key="category.id">
	<h2 :class="{'pt-4': idx !== 0}">{{category.name}}</h2>
	
	<MenuSplit
		:items="category.menuItems"
		:selectedMenuItems="selectedMenuItems"
		@clickMinus="args => emit('clickMinus', args)"
		@clickPlus="args => emit('clickPlus', args)"
	/>
  </div>
</template>

<style scoped lang="scss">

</style>