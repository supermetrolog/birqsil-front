<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Th from "../../../../../../common/components/UI/table/Th.vue";
import {PropType} from "@vue/runtime-core";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import MenuTableItem from "~/components/domain/base/menu/list/MenuTableItem.vue";

interface IProps {
  menuItems: MenuItem[],
}
const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView'])

const {menuItems}: IProps = defineProps({
  menuItems: {
	type: Array as PropType<MenuItem[]>,
	required: true
  }
});

</script>

<template>
  <v-table>
	<thead>
	  <Tr>
		<Th>{{ $t('Image') }}</Th>
		<Th>{{ $t('Title') }}</Th>
		<Th>{{ $t('Description') }}</Th>
		<Th>{{ $t('Category') }}</Th>
		<Th>{{ $t('Status') }}</Th>
		<Th>{{ $t('Created At') }}</Th>
		<Th>{{ $t('Actions') }}</Th>
	  </Tr>
	</thead>
	<tbody>
	  <MenuTableItem
		  v-for="item in menuItems"
		  :key="item.id"
		  :item="item"
		  @clickDelete="args => emit('clickDelete', args)"
		  @clickUpdate="args => emit('clickUpdate', args)"
		  @clickView="args => emit('clickView', args)"
	  />
	</tbody>
  </v-table>
</template>

<style scoped lang="scss">

</style>