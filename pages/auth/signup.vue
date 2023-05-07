<template>
<Signup @signup="signupHandler"/>
</template>

<script setup lang="ts">
import Signup from "~/components/auth/signup/Signup.vue";
import {NuxtApp} from "#app";

const { $router }: NuxtApp = useNuxtApp();

definePageMeta({
	layout: 'auth'
});

const signupHandler = () => {
	$router.push('/');
}

</script>

<style scoped>

</style>