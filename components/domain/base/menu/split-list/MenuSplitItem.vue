<script setup lang="ts">
import MenuItem from "~/domain/entities/MenuItem";
import {PropType} from "@vue/runtime-core";

interface IProps {
  item: MenuItem,
}

const {item}: IProps = defineProps({
  item: {
	type: Object as PropType<MenuItem>,
	required: true
  }
});
</script>

<template>
  <v-card density="compact" width="400">
	<v-avatar
		v-if="item.image"
		size="100%"
		rounded="0"
	>
	  <v-img :src="item.image.link"></v-img>
	</v-avatar>
	<div class="pb-5 pt-2">
	  <v-card-title class="text-h5">
		{{ item.title }}
	  </v-card-title>
	  
	  <v-card-subtitle>{{ item.description }}</v-card-subtitle>
	</div>
  </v-card>
</template>

<style scoped lang="scss">

</style>