<template>
	<div class="signup">
		<Card>
			<div class="logo">
				<p>bir<span>q</span>sil</p>
			</div>
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
                {{ $hello('world') }}
                <Input
					:type="InputType.PASSWORD"
                    :label="$t('passwordRepeat')"
                    :v="new V($v.passwordRepeat)"
					v-model="form.passwordRepeat"
                />
                {{ $hello('world') }}
				<div class="submit-button-container">
                    <Button
					  :color="Color.EMERALD_GRADIENT"
					  :large="true"
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
import V from "~/domain/adapters/Validate";
import {email, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import AuthService from "~/domain/services/AuthService";
import AuthServiceFactory from "~/domain/factories/AuthServiceFactory";
import {ISignUpData} from "~/domain/components/api/Auth";
const authServiceFactory: AuthServiceFactory = new AuthServiceFactory();

const { $hello } = useNuxtApp();

const service: AuthService = authServiceFactory.create();

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
  width: 400px;
}
.logo {
  p {
	text-transform: uppercase;
	text-align: center;
	font-size: 42px;
    font-weight: bold;
	letter-spacing: 5px;
    font-style: italic;
	span {
	  color: $color_emerald;
	}
  }
}
.submit-button-container {
  margin-top: $gap1;
  button {
    font-weight: bold;
  }
}
</style>