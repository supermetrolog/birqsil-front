<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Td from "../../../../../../common/components/UI/table/Td.vue";
import {PropType} from "@vue/runtime-core";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import Status from "../../../../../../common/enums/Status";
import {truncate} from "../../../../../../common/helpers/String";
import Th from "../../../../../../common/components/UI/table/Th.vue";
import Formatter from "../../../../../../common/helpers/Formatter";
interface IProps {
  item: MenuItem,
}

const {item}: IProps = defineProps({
  item: {
	type: Object as PropType<MenuItem>,
	required: true
  }
});

const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView', 'clickSortUp', 'clickSortDown'])
</script>

<template>
  <Tr clickable @click="emit('clickView', item)">
	<Td>
		<v-img :src="item.image.link" width="100px" height="100%"></v-img>
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
	  {{Formatter.currency(item.price)}}
	</Td>
	<Td>
	  {{Formatter.currency(item.sale_price)}}
	</Td>
	<Td>
	  {{Formatter.number(item.amount)}} {{item.unit?.value}}
	</Td>
	<Td class="text-center">
	  <v-badge
		  :color="Status.badge(item.status)"
		  :content="Status[item.status]"
		  :inline="true"
	  ></v-badge>
	</Td>
	<Td class="text-center">
	  {{ Formatter.date().locale(item.created_at, 'ru') }}
	</Td>
	<Td width="200px">
	  <div class="d-flex">
		<v-btn icon="mdi mdi-arrow-up-bold-outline" density="compact" @click.stop="emit('clickSortUp', item)"></v-btn>
		<v-btn icon="mdi mdi-arrow-down-bold-outline" density="compact" @click.stop="emit('clickSortDown', item)"></v-btn>
		<v-btn icon="mdi mdi-pencil-outline" density="compact" @click.stop="emit('clickUpdate', item)"></v-btn>
		<v-btn icon="mdi mdi-trash-can-outline" density="compact" @click.stop="emit('clickDelete', item)"></v-btn>
	  </div>
	</Td>
  </Tr>
</template>

<style scoped lang="scss">

</style>