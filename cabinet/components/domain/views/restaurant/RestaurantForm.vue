<script setup lang="ts">
import {NuxtApp} from "#app";
import {PropType} from "@vue/runtime-core";
import Scenario from "../../../../../common/enums/Scenario";
import required from "../../../../../common/validators/required";
import {IRestaurantData} from "~/domain/components/api/Restaurant";
import Restaurant from "../../../../../common/domain/entities/Restaurant";
import timeoutVuetify from "../../../../../common/validators/timeoutVuetify";

const { $i18n, $restaurantService }: NuxtApp  = useNuxtApp();

interface IProps {
  scenario: Scenario,
  updateRestaurant: Restaurant|null
}

const {scenario, updateRestaurant}: IProps = defineProps({
  scenario: {
	type: String as PropType<Scenario>,
	required: true
  },
  updateRestaurant: {
	type: Object as PropType<Restaurant|null>,
  }
});

if (scenario === Scenario.UPDATE && !updateRestaurant) {
  throw new Error('Restaurant cannot be null when scenario is update')
}

const form: IRestaurantData = reactive({
  name: "",
  address: "",
  status: null,
  unique_name: null,
});

if (scenario === Scenario.UPDATE && updateRestaurant) {
  form.name = updateRestaurant.name;
  form.address = updateRestaurant.address;
  form.status = updateRestaurant.status;
  form.unique_name = updateRestaurant.unique_name;
}

const rules = {
	name: [
	  required,
	],
	unique_name: [
	  required,
	  timeoutVuetify(2000, async (value) => {
		if (await $restaurantService.checkExistsByUniqueName(value)) {
		  return $i18n.t('Unique name already taken');
		}
		
		return true;
	  })
	],
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
  
  if (scenario == Scenario.UPDATE && updateRestaurant) {
	const restaurant: Restaurant | null = await $restaurantService.update(updateRestaurant.id, form);
	
	if (!restaurant) {
	  throw new Error('Create restaurant error');
	}
	
	emit('updated', restaurant);
  }
  
};

</script>

<template>
	<v-form @submit.prevent="handleSubmit">
	  <v-text-field
		  v-model="form.name"
		  :label="$t('Name')"
		  :rules="rules.name"
	  ></v-text-field>
	  <v-text-field
		  v-model="form.unique_name"
		  :label="$t('Unique Name')"
		  :rules="rules.unique_name"
	  ></v-text-field>
	  <v-text-field
		  v-model="form.address"
		  :label="$t('Address')"
	  ></v-text-field>
	  <v-btn type="submit" block class="mt-2">Submit</v-btn>
	</v-form>
</template>

<style scoped lang="scss">

</style>