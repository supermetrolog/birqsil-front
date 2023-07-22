<script setup lang="ts">

import Tr from "~/components/UI/table/Tr.vue";
import Td from "~/components/UI/table/Td.vue";
import {PropType} from "@vue/runtime-core";
import MenuItem from "~/domain/entities/MenuItem";

interface IProps {
  item: MenuItem,
}

const {item}: IProps = defineProps({
  item: {
	type: Object as PropType<MenuItem>,
	required: true
  }
});

const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView'])

</script>

<template>
  <Tr clickable @click="emit('clickView', restaurant)">
	<Td>
	  {{item.title}}
	</Td>
	<Td>
	  {{item.description}}
	</Td>
	<Td>
	  {{item.status}}
	</Td>
	<Td>
	  {{ item.created_at }}
	</Td>
	<Td>
	  <v-btn icon="mdi mdi-pencil-outline" density="compact" @click.stop="emit('clickUpdate', item)"></v-btn>
	  <v-btn icon="mdi mdi-trash-can-outline" density="compact" @click.stop="emit('clickDelete', item)"></v-btn>
	</Td>
  </Tr>
</template>

<style scoped lang="scss">

</style>