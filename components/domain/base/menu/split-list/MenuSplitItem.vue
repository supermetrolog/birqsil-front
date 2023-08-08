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
  <v-card density="compact" width="100%">
	<v-avatar
		v-if="item.image"
		size="100%"
		rounded="0"
	>
	  <v-img :src="item.image.link"></v-img>
	</v-avatar>
	<div class="pb-5 pt-2">
	  <v-card-text class="pt-0">
		<div class="d-flex justify-space-between align-end">
		  <div class="number-info">
			  <p class="price"><span class="number">650</span> <v-icon class="currency" icon="mdi mdi-currency-rub" /></p>
			  <p class="quantity"><span class="number">220</span> <span class="unit">{{$t('g')}}</span></p>
		  </div>
		  <div>
			<v-btn icon="mdi mdi-plus" density="compact"></v-btn>
		  </div>
		</div>
	  </v-card-text>
	  <v-card-title class="text-h5">
		{{ item.title }}
	  </v-card-title>
	  
	  <v-card-subtitle>{{ item.description }}</v-card-subtitle>
	</div>
  </v-card>
</template>

<style scoped lang="scss">
	.number-info {
	  display: flex;
	  gap: 10px;
	  .price {
		position: relative;
		padding-right: 20px;
		
		.currency {
		  position: absolute;
		}
	  }
	  
	  .quantity {
		.unit {
		  font-size: 22px;
		}
	  }
	  
	  .number {
		font-size: 18px;
	  }
	}
</style>