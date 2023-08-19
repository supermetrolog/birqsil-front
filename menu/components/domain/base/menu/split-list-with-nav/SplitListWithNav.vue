<script setup lang="ts">

import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import {PropType} from "@vue/runtime-core";
import Category from "../../../../../../common/domain/entities/Category";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import {options} from "../../../../../../common/helpers/options/Options";
import {Ref} from "vue";
import {integer} from "vscode-languageserver-types";

interface IProps {
  categories: Category[],
  selectedMenuItems: MenuItem[],
}

const {categories, selectedMenuItems}: IProps = defineProps({
  categories: {
	type: Array as PropType<Category[]>,
	required: true
  },
  selectedMenuItems: {
	type: Array as PropType<MenuItem[]>
  }
});

const emit = defineEmits(['clickPlus', 'clickMinus']);
const categoryOptions = options(categories, 'name', 'id');

const categorySlideGroupModel: Ref<integer> = ref(null)

const changeCategory = (category: Category) => {
	categorySlideGroupModel.value = category.id;
}

onMounted(() => {
  if (categoryOptions.length) {
	categorySlideGroupModel.value = categoryOptions[0].value;
  }
});

</script>

<template>
	<v-slide-group
		class="sticky"
		center-active
		show-arrows
		v-model="categorySlideGroupModel"
		mandatory
	>
	  <v-slide-group-item
		  v-for="opt in categoryOptions"
		  :key="opt.value"
		  :value="opt.value"
		  v-slot="{ isSelected, toggle }"
	  >
		<v-btn
			class="ma-2"
			rounded
			:color="isSelected ? 'primary' : ''"
			@click="toggle"
		>
		  {{ opt.label }}
		</v-btn>
	  </v-slide-group-item>
	</v-slide-group>
	
  <div v-for="(category, idx) in categories" :key="category.id">
	<h2 :class="{'pt-4': idx !== 0}" @click="changeCategory(category)">{{category.name}}</h2>
	
	<MenuSplit
		:items="category.menuItems"
		:selectedMenuItems="selectedMenuItems"
		@clickMinus="args => emit('clickMinus', args)"
		@clickPlus="args => emit('clickPlus', args)"
	/>
  </div>
</template>

<style scoped lang="scss">
	.sticky {
	  padding: 10px 0;
	  position: sticky;
	  top: 60px;
	  z-index: 1;
	  background-color: $color_light;
	}
</style>