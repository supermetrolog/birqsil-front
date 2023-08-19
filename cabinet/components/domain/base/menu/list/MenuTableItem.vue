<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Td from "../../../../../../common/components/UI/table/Td.vue";
import {PropType} from "@vue/runtime-core";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import Status from "../../../../../../common/enums/Status";
import {truncate} from "../../../../../../common/helpers/String";
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
  <Tr clickable @click="emit('clickView', item)">
	<Td>
		<v-img :src="item.image.link" width="150px" height="100%"></v-img>
	</Td>
	<Td>
	  {{item.title}}
	</Td>
	<Td>
	  {{truncate(item.description, 20)}}
	</Td>
	<Td>
	  {{item.category.name}}
	</Td>
	<Td>
	  {{item.price}}
	</Td>
	<Td>
	  {{item.sale_price}}
	</Td>
	<Td>
	  {{item.amount}}
	</Td>
	<Td>
	  {{item.unit_id}}
	</Td>
	<Td>
	  <v-badge
		  :color="Status.badge(item.status)"
		  :content="Status[item.status]"
		  :inline="true"
	  ></v-badge>
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