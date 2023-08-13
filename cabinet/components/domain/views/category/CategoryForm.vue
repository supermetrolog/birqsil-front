<script setup lang="ts">
import {NuxtApp} from "#app";
import {PropType} from "@vue/runtime-core";
import Scenario from "../../../../../common/enums/Scenario";
import required from "../../../../../common/validators/required";
import {integer} from "vscode-languageserver-types";
import Category from "../../../../../common/domain/entities/Category";
import {ICategoryData} from "~/domain/components/api/Category";

const { $categoryService }: NuxtApp  = useNuxtApp();

interface IProps {
  scenario: Scenario,
  updateCategory: Category|null,
  restaurantId: integer
}

const {scenario, updateCategory, restaurantId}: IProps = defineProps({
  scenario: {
	type: String as PropType<Scenario>,
	required: true
  },
  updateCategory: {
	type: Object as PropType<Category|null>,
  },
  restaurantId: {
	type: Number as PropType<integer>,
  }
});

if (scenario === Scenario.UPDATE && !updateCategory) {
  throw new Error('Category cannot be null when scenario is update')
}

const form: ICategoryData = reactive({
  restaurant_id: null,
  name: ""
});

if (scenario === Scenario.CREATE) {
  form.restaurant_id = restaurantId;
}
console.log(updateCategory)
if (scenario === Scenario.UPDATE && updateCategory) {
  form.name = updateCategory.name;
  form.restaurant_id = updateCategory.restaurant_id;
}

const rules = {
  name: [
	required,
  ],
}

const emit = defineEmits(['created', 'updated'])

const handleSubmit = async (event) => {
  const result = await event
  
  if (!result.valid) {
	return
  }
  
  if (scenario == Scenario.CREATE) {
	const category: Category | null = await $categoryService.create(form);
	
	if (!category) {
	  throw new Error('Create menu item error');
	}
	
	emit('created', category);
  }
  
  if (scenario == Scenario.UPDATE && updateCategory) {
	const category: Category | null = await $categoryService.update(updateCategory.id, form);
	
	if (!category) {
	  throw new Error('Update menu item error');
	}
	
	emit('updated', category);
  }
};

</script>

<template>
  <v-form @submit.prevent="handleSubmit">
	<v-text-field
		density="compact"
		v-model="form.name"
		:label="$t('Name')"
		:rules="rules.name"
	/>
	
	<v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
</template>

<style scoped lang="scss">

</style>