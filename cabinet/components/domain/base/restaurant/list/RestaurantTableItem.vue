<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Td from "../../../../../../common/components/UI/table/Td.vue";
import Restaurant from "../../../../../../common/domain/entities/Restaurant";
import {PropType} from "@vue/runtime-core";
import RestaurantStatus from "../../../../../../common/enums/RestaurantStatus";
import Formatter from "../../../../../../common/helpers/Formatter";

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
	  {{restaurant.unique_name}}
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
	  {{ Formatter.date().locale(restaurant.created_at, 'ru')}}
	</Td>
	<Td>
	  <div class="d-flex">
		<v-btn icon="mdi mdi-list-box-outline" density="compact" @click.stop="emit('clickOpenMenu', restaurant)"></v-btn>
		<v-btn icon="mdi mdi-pencil-outline" density="compact" @click.stop="emit('clickUpdate', restaurant)"></v-btn>
		<v-btn icon="mdi mdi-trash-can-outline" density="compact" @click.stop="emit('clickDelete', restaurant)"></v-btn>
	  </div>
	</Td>
  </Tr>
</template>

<style scoped lang="scss">

</style>