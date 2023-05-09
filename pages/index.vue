<template>
    <h1>BIRQSIL</h1>
    <h1 v-if="!$user.isGuest">User: {{$user.identity.email}}</h1>
    <button @click="signOutHandler">Logout</button>
</template>

<script setup lang="ts">

import {NuxtApp} from "#app";
import Route from "~/enums/Route";

const { $router, $user }: NuxtApp = useNuxtApp();

if ($user.isGuest) {
    $router.push(Route.AUTH_SIGNIN);
}

const signOutHandler = () => {
    $user.logout();
    $router.push(Route.AUTH_SIGNIN);
};
</script>

<style scoped>

</style>