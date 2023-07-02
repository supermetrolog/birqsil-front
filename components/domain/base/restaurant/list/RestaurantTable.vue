<script setup lang="ts">

import Tr from "~/components/UI/table/Tr.vue";
import Th from "~/components/UI/table/Th.vue";
import RestaurantTableItem from "~/components/domain/base/restaurant/list/RestaurantTableItem.vue";
import Restaurant from "~/domain/entities/Restaurant";
import {PropType} from "@vue/runtime-core";

interface IProps {
  restaurants: Restaurant[],
}
const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView'])

const {restaurants}: IProps = defineProps({
  restaurants: {
	type: Array as PropType<Restaurant[]>,
	required: true
  }
});

</script>

<template>
  <v-table>
	<thead>
	  <Tr>
		<Th>{{ $t('Name') }}</Th>
		<Th>{{ $t('Address') }}</Th>
		<Th>{{ $t('Status') }}</Th>
		<Th>{{ $t('Created At') }}</Th>
		<Th>{{ $t('Actions') }}</Th>
	  </Tr>
	</thead>
	<tbody>
	  <RestaurantTableItem
		  v-for="restaurant in restaurants"
		  :key="restaurant.id"
		  :restaurant="restaurant"
		  @clickDelete="args => emit('clickDelete', args)"
		  @clickUpdate="args => emit('clickUpdate', args)"
		  @clickView="args => emit('clickView', args)"
	  />
	</tbody>
  </v-table>
</template>

<style scoped lang="scss">

</style>