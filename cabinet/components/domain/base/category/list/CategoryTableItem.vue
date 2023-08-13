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

const emit = defineEmits(['clickDelete', 'clickUpdate'])
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
	  <v-btn icon="mdi mdi-pencil-outline" density="compact" @click.stop="emit('clickUpdate', item)"></v-btn>
	  <v-btn icon="mdi mdi-trash-can-outline" density="compact" @click.stop="emit('clickDelete', item)"></v-btn>
	</Td>
  </Tr>
</template>

<style scoped lang="scss">

</style>