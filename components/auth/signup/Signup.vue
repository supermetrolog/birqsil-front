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
					v-model="form.email"
				/>
				<Input
					:type="InputType.PASSWORD"
					label="Password"
					v-model="form.password"
				/>
                <Input
					:type="InputType.PASSWORD"
					label="Password repeat"
					v-model="form.passwordRepeat"
                />
				<div class="submit-button-container">
                    <Button :color="Color.EMERALD">
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

interface ISignUpForm {
    email: string;
	password: string;
    passwordRepeat: string;
}

const form: ISignUpForm = ref<ISignUpForm>({
	email: "",
	password: "",
	passwordRepeat: ""
});

const handleSubmit = () => {
    console.log("SUBMIT", form);
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