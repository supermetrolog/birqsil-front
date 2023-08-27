<script setup lang="ts">

import Tr from "../../../../../../common/components/UI/table/Tr.vue";
import Td from "../../../../../../common/components/UI/table/Td.vue";
import {PropType} from "@vue/runtime-core";
import Category from "../../../../../../common/domain/entities/Category";
interface IProps {
  item: Category,
}

const {item}: IProps = defineProps({
  item: {
	type: Object as PropType<Category>,
	required: true
  }
});

const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickSortUp', 'clickSortDown'])
</script>

<template>
  <Tr>
	<Td>
	  {{item.name}}
	</Td>
	<Td>
	  {{item.created_at}}
	</Td>
	<Td>
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