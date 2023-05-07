<template>
    <h1>BIRQSIL</h1>
    <h1 v-if="!user.isGuest">User: {{user.identity.email}}</h1>
</template>

<script setup lang="ts">

import User from "~/domain/components/user/User";
import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import {NuxtApp} from "#app";

const { $router }: NuxtApp = useNuxtApp();

const user: User = UserComponentFactory.create();

if (user.isGuest) {
    $router.push('auth/signup');
}
</script>

<style scoped>

</style>