<script setup lang="ts">
import {NuxtApp} from "#app";
import {PropType} from "@vue/runtime-core";
import Scenario from "~/enums/Scenario";
import required from "~/validators/required";
import {IRestaurantData} from "~/domain/components/api/Restaurant";
import Restaurant from "~/domain/entities/Restaurant";

const { $i18n, $restaurantService }: NuxtApp  = useNuxtApp();

interface IProps {
  scenario: Scenario,
}

const {scenario}: IProps = defineProps({
  scenario: {
	type: String as PropType<Scenario>,
	required: true
  }
});


const form: IRestaurantData = reactive({
  name: "",
  address: "",
  status: null,
});

const rules = {
	name: [
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
	const restaurant: Restaurant | null = await $restaurantService.create(form);
	
	if (!restaurant) {
	  throw new Error('Create restaurant error');
	}
	
	emit('created', restaurant);
  }
  
};

</script>

<template>
  <v-sheet width="300" class="mx-auto">
	<v-form @submit.prevent="handleSubmit">
	  <v-text-field
		  v-model="form.name"
		  :label="$t('Name')"
		  :rules="rules.name"
	  ></v-text-field>
	  <v-btn type="submit" block class="mt-2">Submit</v-btn>
	</v-form>
  </v-sheet>
</template>

<style scoped lang="scss">

</style>