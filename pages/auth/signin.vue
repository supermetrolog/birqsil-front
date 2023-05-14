<template>
    <Signin @signin="signinHandler"/>
</template>

<script setup lang="ts">
import Signin from "~/components/auth/signin/Signin.vue";
import {NuxtApp} from "#app";

const { $router }: NuxtApp = useNuxtApp();

definePageMeta({
    layout: 'auth'
});

const signinHandler = () => {
    $router.push('/');
}

</script>

<style scoped>

</style>