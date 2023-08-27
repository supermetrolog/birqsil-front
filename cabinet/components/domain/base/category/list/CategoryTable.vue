<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Th from "../../../../../../common/components/UI/table/Th.vue";
import {PropType} from "@vue/runtime-core";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import MenuTableItem from "~/components/domain/base/menu/list/MenuTableItem.vue";
import Category from "../../../../../../common/domain/entities/Category";
import CategoryTableItem from "~/components/domain/base/category/list/CategoryTableItem.vue";

interface IProps {
  menuItems: MenuItem[],
}
const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickSortUp', 'clickSortDown'])

const {categories}: IProps = defineProps({
  categories: {
	type: Array as PropType<Category[]>,
	required: true
  }
});

</script>

<template>
  <v-table>
	<thead>
	  <Tr>
		<Th>{{ $t('Name') }}</Th>
		<Th>{{ $t('Created At') }}</Th>
		<Th>{{ $t('Actions') }}</Th>
	  </Tr>
	</thead>
	<tbody>
	  <CategoryTableItem
		  v-for="item in categories"
		  :key="item.id"
		  :item="item"
		  @clickDelete="args => emit('clickDelete', args)"
		  @clickUpdate="args => emit('clickUpdate', args)"
		  @clickSortUp="args => emit('clickSortUp', args)"
		  @clickSortDown="args => emit('clickSortDown', args)"
	  />
	</tbody>
  </v-table>
</template>

<style scoped lang="scss">

</style>