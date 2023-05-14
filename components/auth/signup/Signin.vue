<template>
    <div class="signin">
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
            <div class="submit-button-container">
                <Button
                        :color="Color.EMERALD_GRADIENT"
                        :large="true"
                >
                    Sing In
                </Button>
            </div>
        </Form>
        <NuxtLink :to="Route.AUTH_SIGNUP">
            Sign up
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import Input from "~/components/common/form/Input.vue";
import Form from "~/components/common/form/Form.vue";
import Button from "~/components/common/Button.vue";
import Color from "~/enums/Color";
import InputType from "~/enums/InputType";
import V from "~/domain/adapters/Validate";
import {email, helpers, minLength, required, sameAs} from "@vuelidate/validators";
import useVuelidate, {ErrorObject} from "@vuelidate/core";
import {ISignUpData} from "~/domain/components/api/Auth";
import timeout from "~/validators/timeout";
import {NuxtApp} from "#app";
import Route from "~/enums/Route";

const { $i18n, $authService, $userService }: NuxtApp  = useNuxtApp();

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
        general: {
            required,
        }
    };
});
const isEmailTaken = async (value: string): Promise<boolean> => {
    if (value === '') return true;
    return !await $userService.checkEmailExists(value);
};

const $v = useVuelidate(rules, form);
const emit = defineEmits(['signin'])

const handleSubmit = async () => {
    await $v.value.$validate();

    if ($v.value.$error){
        return;
    }
    
    $v.value.email.$errors.push()    ;
    
    await $authService.signIn(form);
    emit('signin');
};

</script>

<style scoped lang="scss">
</style>