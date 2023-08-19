<script setup lang="ts">

import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import {PropType} from "@vue/runtime-core";
import Category from "../../../../../../common/domain/entities/Category";
import MenuItem from "../../../../../../common/domain/entities/MenuItem";
import {options} from "../../../../../../common/helpers/options/Options";
import {Ref} from "vue";
import {integer} from "vscode-languageserver-types";
import timeout from "../../../../../../common/validators/timeout";

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
const test: Ref<integer> = ref(null)
const changeCategoryDelay = timeout(300, (isIntersecting, entries) => {
  if (isIntersecting) {
	categorySlideGroupModel.value = +entries[0].target.dataset.category;
  }
});
const changeCategory = (isIntersecting, entries) => {
  if (isIntersecting) {
   changeCategoryDelay(isIntersecting, entries)
  }
}
const scroller = (selector, options, yOffset = 0) => {
  const el = document.querySelector(selector);
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
  window.scrollTo({top: y, ...options});
}
const scrollToCategory = (categoryId: integer) => {
  const options: ScrollIntoViewOptions = {
	behavior: "smooth",
	block: "start"
  };
  
  // scroller(`.category-name[data-category="${categoryId}"]`, options, -20);
  const el = document.querySelector(`.category-name[data-category="${categoryId}"]`);
  el.scrollIntoView(options)
  // el.scrollTop -= 200
  // window.scrollBy(0, -10);
  // this.$refs.firstPagination.$el.scrollIntoView(options);
}

onMounted(() => {
  if (categoryOptions.length) {
	categorySlideGroupModel.value = categoryOptions[0].value;
  }
});

</script>

<template>
	<v-slide-group
		ref="test"
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
		  v-slot="{ isSelected }"
	  >
		<v-btn
			density="comfortable"
			class="ma-2"
			rounded
			:color="isSelected ? 'primary' : ''"
			@click="scrollToCategory(opt.value)"
		>
		  {{ opt.label }}
		</v-btn>
	  </v-slide-group-item>
	</v-slide-group>
  <v-container fluid>
	<div
		v-intersect.quiet="{
            handler: changeCategory,
            options: {
              threshold: 0.5
            }
          }"
		class="category-name"
		:data-category="category.id"
		v-for="(category, idx) in categories" :key="category.id">
	  <h2
		  :class="{'pt-4': idx !== 0}"
	  >
		{{ category.name }}
	  </h2>
	  
	  <MenuSplit
		  :items="category.menuItems"
		  :selectedMenuItems="selectedMenuItems"
		  @clickMinus="args => emit('clickMinus', args)"
		  @clickPlus="args => emit('clickPlus', args)"
	  />
	</div>
  </v-container>
</template>

<style scoped lang="scss">
	.sticky {
	  padding: 10px 0;
	  position: sticky;
	  top: 60px;
	  z-index: 1;
	  background-color: $color_light;
	}
	
	.category-name {
	  scroll-margin: 7em;
	}
</style>