<script setup lang="ts">
import MenuItem from "~/domain/entities/MenuItem";
import {PropType} from "@vue/runtime-core";
import MenuSplitItem from "~/components/domain/base/menu/split-list/MenuSplitItem.vue";

interface IProps {
  items: MenuItem[],
}

const {items}: IProps = defineProps({
  items: {
	type: Object as PropType<MenuItem[]>,
	required: true
  }
});
</script>

<template>
	<MenuSplitItem v-for="item in items" :item="item" :key="item.id" class="mt-3" />
</template>

<style scoped lang="scss">

</style>