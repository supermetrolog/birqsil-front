<script setup lang="ts">

import Tr from "~/components/UI/table/Tr.vue";
import Td from "~/components/UI/table/Td.vue";
import {PropType} from "@vue/runtime-core";
import MenuItem from "~/domain/entities/MenuItem";
import Status from "~/enums/Status";
import Category from "~/domain/entities/Category";
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