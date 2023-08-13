<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Td from "../../../../../../common/components/UI/table/Td.vue";
import Restaurant from "../../../../../../common/domain/entities/Restaurant";
import {PropType} from "@vue/runtime-core";
import RestaurantStatus from "../../../../../../common/enums/RestaurantStatus";

interface IProps {
  restaurant: Restaurant,
}

const {restaurant}: IProps = defineProps({
  restaurant: {
	type: Object as PropType<Restaurant>,
	required: true
  }
});

const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView', 'clickOpenMenu'])

</script>

<template>
  <Tr clickable @click="emit('clickView', restaurant)">
	<Td>
	  {{restaurant.name}}
	</Td>
	<Td>
	  {{restaurant.address}}
	</Td>
	<Td>
	  <v-badge
		  :color="RestaurantStatus.badge(restaurant.status)"
		  :content="RestaurantStatus[restaurant.status]"
		  :inline="true"
	  ></v-badge>
	</Td>
	<Td>
	  {{ restaurant.created_at }}
	</Td>
	<Td>
	  <v-btn icon="mdi mdi-list-box-outline" density="compact" @click.stop="emit('clickOpenMenu', restaurant)"></v-btn>
	  <v-btn icon="mdi mdi-pencil-outline" density="compact" @click.stop="emit('clickUpdate', restaurant)"></v-btn>
	  <v-btn icon="mdi mdi-trash-can-outline" density="compact" @click.stop="emit('clickDelete', restaurant)"></v-btn>
	</Td>
  </Tr>
</template>

<style scoped lang="scss">

</style>