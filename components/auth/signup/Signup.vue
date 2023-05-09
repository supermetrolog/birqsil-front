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
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import AuthService from "~/domain/services/AuthService";
import AuthServiceFactory from "~/domain/factories/AuthServiceFactory";
import {ISignUpData} from "~/domain/components/api/Auth";
import UserServiceFactory from "~/domain/factories/UserServiceFactory";
import UserService from "~/domain/services/UserService";
import timeout from "~/validators/timeout";
import {NuxtApp} from "#app";

const { $i18n }: NuxtApp  = useNuxtApp();
const authService: AuthService = AuthServiceFactory.create();
const userService: UserService = UserServiceFactory.create();

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
    return !await userService.checkEmailExists(value);
};

const $v = useVuelidate(rules, form);
const emit = defineEmits(['signup'])

const handleSubmit = async () => {
    await $v.value.$validate();
    
    if ($v.value.$error){
        return;
	}

    await authService.signUp(form);
    emit('signup');
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