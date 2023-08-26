<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {integer} from "vscode-languageserver-types";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";

interface IProps {
  item: MenuItem,
  selectCount: integer,
}

const {item, selectCount}: IProps = defineProps({
  item: {
	type: Object as PropType<MenuItem>,
	required: true
  },
  selectCount: {
	type: Number as PropType<integer>,
	required: false,
  }
});

const emit = defineEmits(['clickPlus', 'clickMinus']);
</script>

<template>
  <v-card density="compact" width="100%">
	<div class="avatar">
	  <v-avatar
		  v-if="item.image"
		  size="100%"
		  rounded="0"
	  >
		<v-img :src="item.image.link"></v-img>
	  </v-avatar>
	</div>
	<div class="pb-5 pt-2">
	  <v-card-text class="pt-0">
		<div class="d-flex justify-space-between align-end">
		  <div class="number-info">
			  <p class="price"><span class="number">{{item.price}}</span> <v-icon class="currency" icon="mdi mdi-currency-rub" /></p>
			  <p v-if="item.amount" class="quantity"><span class="number">{{item.amount}}</span> <span class="unit">{{ $t(item.unit.value) }}</span></p>
		  </div>
		  <div class="select d-flex justify-space-between text-center align-center">
			<v-btn v-if="selectCount" icon="mdi mdi-minus" density="compact" @click.stop="emit('clickMinus', item)"></v-btn>
			<div class="select-count" v-if="selectCount">
			  <b>{{selectCount}}</b>
			</div>
			<v-btn icon="mdi mdi-plus" density="compact" @click.stop="emit('clickPlus', item)"></v-btn>
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
	
	.select {
	  &-count {
		width: 40px;
	  }
	}
	
	.avatar {
	  min-height: 200px;
	}
</style>