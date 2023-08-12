<script setup lang="ts">
import MenuItem from "~/domain/entities/MenuItem";
import {PropType} from "@vue/runtime-core";
import MenuSplitItem from "~/components/domain/base/menu/split-list/MenuSplitItem.vue";

interface IProps {
  items: MenuItem[],
  selectedMenuItems: MenuItem[],
}

const {items, selectedMenuItems}: IProps = defineProps({
  items: {
	type: Object as PropType<MenuItem[]>,
	required: true
  },
  selectedMenuItems: {
	type: Array as PropType<MenuItem[]>
  }
});

const emit = defineEmits(['clickPlus', 'clickMinus']);
</script>

<template>
	<MenuSplitItem
		class="mt-3"
		v-for="item in items"
		:item="item"
		:key="item.id"
		:selectCount="selectedMenuItems.filter((mItem: MenuItem) => mItem.id === item.id).length"
		@clickMinus="args => emit('clickMinus', args)"
		@clickPlus="args => emit('clickPlus', args)"
	/>
</template>

<style scoped lang="scss">

</style>