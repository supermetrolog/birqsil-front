<script setup lang="ts">

import Tr from "~/components/UI/table/Tr.vue";
import Td from "~/components/UI/table/Td.vue";
import Restaurant from "~/domain/entities/Restaurant";
import {PropType} from "@vue/runtime-core";

interface IProps {
  restaurant: Restaurant,
}

const {restaurant}: IProps = defineProps({
  restaurant: {
	type: Object as PropType<Restaurant>,
	required: true
  }
});

const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView'])

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
	  {{restaurant.status}}
	</Td>
	<Td>
	  {{ restaurant.created_at }}
	</Td>
	<Td>
	  <v-btn icon="mdi mdi-pencil-outline" density="compact" @click.stop="emit('clickUpdate', restaurant)"></v-btn>
	  <v-btn icon="mdi mdi-trash-can-outline" density="compact" @click.stop="emit('clickDelete', restaurant)"></v-btn>
	</Td>
  </Tr>
</template>

<style scoped lang="scss">

</style>