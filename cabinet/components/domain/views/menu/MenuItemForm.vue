<script setup lang="ts">
import {NuxtApp} from "#app";
import {PropType} from "@vue/runtime-core";
import Scenario from "../../../../../common/enums/Scenario";
import required from "../../../../../common/validators/required";
import MenuItem from "../../../../../common/domain/entities/MenuItem";
import {IMenuItemData} from "~/domain/components/api/Menu";
import {integer} from "vscode-languageserver-types";
import Status from "../../../../../common/enums/Status";
import StatusOptions from "../../../../../common/helpers/options/StatusOptions";
import {Option, options} from "../../../../../common/helpers/options/Options";

const { $menuService, $categoryService, $generalService }: NuxtApp  = useNuxtApp();

interface IProps {
  scenario: Scenario,
  updateMenuItem: MenuItem|null,
  restaurantId: integer
}

const {scenario, updateMenuItem, restaurantId}: IProps = defineProps({
  scenario: {
	type: String as PropType<Scenario>,
	required: true
  },
  updateMenuItem: {
	type: Object as PropType<MenuItem|null>,
  },
  restaurantId: {
	type: Number as PropType<integer>,
  }
});

if (scenario === Scenario.CREATE && !restaurantId) {
  throw new Error('Restaurant id cannot be null when scenario is create')
}

if (scenario === Scenario.UPDATE && !updateMenuItem) {
  throw new Error('Menu item cannot be null when scenario is update')
}

const form: IMenuItemData = reactive({
  restaurant_id: null,
  category_id: null,
  title: "",
  description: "",
  status: null,
  files: null,
  price: null,
  sale_price: null,
  unit_id: null,
  amount: null
});

if (scenario === Scenario.CREATE) {
  form.restaurant_id = restaurantId;
}

if (scenario === Scenario.UPDATE && updateMenuItem) {
  form.title = updateMenuItem.title;
  form.description = updateMenuItem.description;
  form.status = updateMenuItem.status;
  form.restaurant_id = updateMenuItem.restaurant_id;
  form.category_id = updateMenuItem.category_id;
  form.price = updateMenuItem.price;
  form.sale_price = updateMenuItem.sale_price;
  form.amount = updateMenuItem.amount;
  form.unit_id = updateMenuItem.unit_id;
}

const rules = {
	title: [
	  required,
	],
	status: [
	  required,
	],
  	category_id: [
	  required
	],
	unit_id: [
	  required
	],
	amount: [
	  required
	],
	price: [
	  required
	]
}
const categoryOptions: Option[] = options(await $categoryService.getAll(form.restaurant_id), 'name', 'id');
const unitOptions: Option[] = options(await $generalService.getAllUnits(), 'value', 'id');

const emit = defineEmits(['created', 'updated'])

const handleSubmit = async (event) => {
  const result = await event
  
  if (!result.valid) {
	return
  }
  
  if (scenario == Scenario.CREATE) {
	const menuItem: MenuItem | null = await $menuService.create(form);
	
	if (!menuItem) {
	  throw new Error('Create menu item error');
	}
	
	if (form.files) {
	  if (!await $menuService.setImage(menuItem.id, form.files)) {
		throw new Error('Set menu item image error');
	  }
	}
	
	emit('created', menuItem);
  }
  
  if (scenario == Scenario.UPDATE && updateMenuItem) {
	const menuItem: MenuItem | null = await $menuService.update(updateMenuItem.id, form);
	
	if (!menuItem) {
	  throw new Error('Update menu item error');
	}
	
	if (form.files) {
	  if (!await $menuService.setImage(menuItem.id, form.files)) {
		throw new Error('Set menu item image error');
	  }
	}
	
	emit('updated', menuItem);
  }
};

</script>

<template>
	<v-form @submit.prevent="handleSubmit">
	  <v-text-field
		  density="compact"
		  v-model="form.title"
		  :label="$t('Title')"
		  :rules="rules.title"
	  />
	  <v-text-field
		  density="compact"
		  v-model="form.description"
		  :label="$t('Description')"
	  />
	  <v-select
		  v-model="form.category_id"
		  :label="$t('Category')"
		  :rules="rules.category_id"
		  density="compact"
		  :items="categoryOptions"
		  item-title="label"
		  item-value="value"
	  />
	  <v-text-field
		  density="compact"
		  v-model="form.price"
		  :rules="rules.price"
		  :label="$t('Price')"
		  type="number"
	  />
	  <v-text-field
		  density="compact"
		  v-model="form.sale_price"
		  :label="$t('Sale Price')"
		  type="number"
	  />
	  <v-text-field
		  density="compact"
		  v-model="form.amount"
		  :rules="rules.amount"
		  :label="$t('Amount')"
		  type="number"
	  />
	  <v-select
		  v-model="form.unit_id"
		  :label="$t('Unit')"
		  :rules="rules.unit_id"
		  density="compact"
		  :items="unitOptions"
		  item-title="label"
		  item-value="value"
	  />
	  <v-select
		  v-model="form.status"
		  :label="$t('Status')"
		  :rules="rules.status"
		  density="compact"
		  :items="StatusOptions"
		  item-title="label"
		  item-value="value"
	  />
	  <v-file-input
		  v-model="form.files"
		  density="compact"
		  accept="image/*"
		  clearable
		  :label="$t('Picture')"
	  />
	  
	  <v-btn type="submit" block class="mt-2">Submit</v-btn>
	</v-form>
</template>

<style scoped lang="scss">

</style>