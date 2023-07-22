<script setup lang="ts">
import {NuxtApp} from "#app";
import {PropType} from "@vue/runtime-core";
import Scenario from "~/enums/Scenario";
import required from "~/validators/required";
import MenuItem from "~/domain/entities/MenuItem";
import {IMenuItemData} from "~/domain/components/api/Menu";
import {integer} from "vscode-languageserver-types";

const { $menuService }: NuxtApp  = useNuxtApp();

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

if (scenario === Scenario.UPDATE && !updateMenuItem) {
  throw new Error('Menu item cannot be null when scenario is update')
}

const form: IMenuItemData = reactive({
  restaurant_id: null,
  title: "",
  description: "",
  status: null,
});

if (scenario === Scenario.CREATE) {
  form.restaurant_id = restaurantId;
}
console.log(updateMenuItem)
if (scenario === Scenario.UPDATE && updateMenuItem) {
  form.title = updateMenuItem.title;
  form.description = updateMenuItem.description;
  form.status = updateMenuItem.status;
  form.restaurant_id = updateMenuItem.restaurant_id;
}

const rules = {
	title: [
		required,
	],
  	status: [
		  required,
	]
}

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
	
	emit('created', menuItem);
  }
  
  if (scenario == Scenario.UPDATE && updateMenuItem) {
	const menuItem: MenuItem | null = await $menuService.update(updateMenuItem.id, form);
	
	if (!menuItem) {
	  throw new Error('Create menu item error');
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
	  ></v-text-field>
	  <v-text-field
		  density="compact"
		  v-model="form.description"
		  :label="$t('Description')"
	  ></v-text-field>
	  <v-select
		  v-model="form.status"
		  :label="$t('Status')"
		  :rules="rules.status"
		  density="compact"
		  :items="[
			{ label: 'Active', value: 9 },
			{ label: 'Inactive', value: 10 },
		  ]"
		  item-title="label"
		  item-value="value"
		
	  >
	  </v-select>
	  <v-btn type="submit" block class="mt-2">Submit</v-btn>
	</v-form>
</template>

<style scoped lang="scss">

</style>