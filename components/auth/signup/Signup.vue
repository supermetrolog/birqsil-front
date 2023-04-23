<template>
	<div class="signup">
		<Card>
			<div class="logo text-center">
				Logo
			</div>
			<Form @submit.prevent="handleSubmit">
				<Input
					:type="InputType.TEXT"
					label="Email"
					:v="new V($v.email)"
					v-model="form.email"
				/>
				<Input
					:type="InputType.PASSWORD"
					label="Password"
                    :v="new V($v.password)"
					v-model="form.password"
				/>
                <Input
					:type="InputType.PASSWORD"
					label="Password repeat"
                    :v="new V($v.passwordRepeat)"
					v-model="form.passwordRepeat"
                />
				<div class="submit-button-container">
                    <Button
					  :color="Color.EMERALD"
					  :disabled="!$v.$dirty || $v.$error"
					>
                        Sing Up
                    </Button>
				</div>
			</Form>
		</Card>
	</div>
</template>

<script setup lang="ts">
import Card from "~/components/common/card/Card.vue";
import Input from "~/components/common/form/Input.vue";
import Form from "~/components/common/form/Form.vue";
import Button from "~/components/common/Button.vue";
import Color from "~/enums/Color";
import InputType from "~/enums/InputType";
import V from "~/decorators/Validate";

import {email, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import AuthService, {ISignUpData} from "~/services/AuthService";

const service: AuthService = new AuthService('fuck');

const form: ISignUpData = reactive({
	email: "",
	password: "",
	passwordRepeat: ""
});

const rules = computed(() => {
   return {
		email: {
			required,
			email
		},
		password: {
			required,
		},
		passwordRepeat: {
			required,
			sameAs: sameAs(form.password)
		}
   };
});

const $v = useVuelidate(rules, form);

const handleSubmit = async () => {
    await $v.value.$validate();
    
    if ($v.value.$error){
        return;
	}
    service.signUp(form);
    console.log("SUBMIT");
};

</script>

<style scoped lang="scss">
.signup {
  display: flex;
}
.submit-button-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
</style>