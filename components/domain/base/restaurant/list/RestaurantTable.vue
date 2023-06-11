<script setup lang="ts">

import Table from "~/components/UI/table/Table.vue";
import Tr from "~/components/UI/table/Tr.vue";
import Th from "~/components/UI/table/Th.vue";
import RestaurantTableItem from "~/components/domain/base/restaurant/list/RestaurantTableItem.vue";
import Restaurant from "~/domain/entities/Restaurant";
import {PropType} from "@vue/runtime-core";

interface IProps {
  restaurants: Restaurant[],
}

const {restaurants}: IProps = defineProps({
  restaurants: {
	type: Array as PropType<Restaurant[]>,
	required: true
  }
});

</script>

<template>
  <Table>
	<template #head>
	  <Tr>
		<Th>{{ $t('Name') }}</Th>
		<Th>{{ $t('Address') }}</Th>
		<Th>{{ $t('Status') }}</Th>
		<Th>{{ $t('Created At') }}</Th>
	  </Tr>
	</template>
	
	<template #body>
	  <RestaurantTableItem
		  v-for="restaurant in restaurants"
		  :key="restaurant.id"
		  :restaurant="restaurant"
	  />
	</template>
  
  </Table>
</template>

<style scoped lang="scss">

</style>