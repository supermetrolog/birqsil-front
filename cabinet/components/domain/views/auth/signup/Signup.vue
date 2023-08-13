<template>
	<div class="signup">
	  <Form @submit.prevent="handleSubmit">
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
		  <Input
			  :type="InputType.PASSWORD"
			  :label="$t('password repeat')"
			  :v="new V($v.passwordRepeat)"
			  v-model="form.passwordRepeat"
		  />
		  <div class="submit-button-container">
			  <Button
				:color="Color.EMERALD_GRADIENT"
				:large="true"
			  >
				  Sing Up
			  </Button>
		  </div>
	  </Form>
        <NuxtLink :to="Route.AUTH_SIGNIN">
            Sign in
        </NuxtLink>
	</div>
</template>

<script setup lang="ts">
import Input from "../../../../../../common/components/UI/form/Input.vue";
import Button from "../../../../../../common/components/UI/Button.vue";
import Color from "../../../../../../common/enums/Color";
import InputType from "../../../../../../common/enums/InputType";
import V from "~/domain/adapters/Validate";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {ISignUpData} from "~/domain/components/api/Auth";
import timeout from "../../../../../../common/validators/timeout";
import {NuxtApp} from "#app";
import Route from "../../../../../enums/Route";

const { $i18n, $authService, $userService }: NuxtApp  = useNuxtApp();

const form: ISignUpData = reactive({
	email: "",
	password: "12345678",
	passwordRepeat: "12345678"
});
const rules = computed(() => {
   return {
		email: {
			required,
			email,
			isUnique: helpers.withMessage(
                $i18n.t('Email already used'),
				helpers.withAsync(timeout(1000, isEmailTaken))
			)
		},
		password: {
			required,
			minLength: minLength(8)
		},
		passwordRepeat: {
			required,
			sameAs: sameAs(form.password)
		}
   };
});
const isEmailTaken = async (value: string): Promise<boolean> => {
    if (value === '') return true;
    return !await $userService.checkEmailExists(value);
};

const $v = useVuelidate(rules, form);
const emit = defineEmits(['signup'])

const handleSubmit = async () => {
    await $v.value.$validate();
    
    if ($v.value.$error){
        return;
	}

    await $authService.signUp(form);
    emit('signup');
};

</script>

<style scoped lang="scss">
</style>