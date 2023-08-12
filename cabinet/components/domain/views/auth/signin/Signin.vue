<template>
  <div class="signin">
	<Form @submit.prevent="handleSubmit" :errors="errors">
	  <Input
		  :type="InputType.TEXT"
		  :label="$t('email')"
		  :v="new V($v.email)"
		  v-model="form.email"
	  />
	  <Input
		  :type="InputType.PASSWORD"
		  :label="$t('password')"
		  :v="new V($v.password)"
		  v-model="form.password"
	  />
	  <div class="submit-button-container">
		<Button
			:color="Color.EMERALD_GRADIENT"
			:large="true"
		>
		  {{ $t('Sign In') }}
		</Button>
	  </div>
	</Form>
	<NuxtLink :to="Route.AUTH_SIGNUP">
	  Sign up
	</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/UI/form/Input.vue";
import Button from "~/components/UI/Button.vue";
import Color from "~/../enums/Color";
import InputType from "~/../enums/InputType";
import V from "~/domain/adapters/Validate";
import {email, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {ISignUpData} from "~/domain/components/api/Auth";
import {NuxtApp} from "#app";
import Route from "~/../enums/Route";
import {Response} from "~/domain/components/api/BaseApi";
import {Ref} from "vue";

const {$authService}: NuxtApp = useNuxtApp();

const form: ISignUpData = reactive({
  email: "",
  password: "12345678",
});
const rules = computed(() => {
  return {
	email: {
	  required,
	  email,
	},
	password: {
	  required,
	  minLength: minLength(8)
	},
  };
});
const $v = useVuelidate(rules, form);
const emit = defineEmits(['signin'])

let errors: Ref<string[]> = ref([]);

const setErrors = (errs: string[]) => {
  errors.value = errs;
};
const resetErrors = () => {
  errors.value = [];
};

const handleSubmit = async (): Promise<void> => {
  resetErrors();
  
  await $v.value.$validate();
  
  if ($v.value.$error) {
	return;
  }
  
  const res: Response = await $authService.signIn(form);
  if (res.isOk()) {
	return emit('signin');
  }
  
  setErrors(res.getErrors());
};

</script>

<style scoped lang="scss">
</style>