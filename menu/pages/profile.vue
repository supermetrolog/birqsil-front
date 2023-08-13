<script setup lang="ts">
import {useBreadcrumbs} from "~/composables/breadcrumbs";
import {NuxtApp} from "#app";

const { $i18n, $user }: NuxtApp = useNuxtApp();

const title = $i18n.t('Profile');

useSeoMeta({
  title: title
})

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
	title: title,
	disabled: true,
	to: ''
  }
];
</script>

<template>
  <v-card>
	<v-card-title>
	  {{title}}
	</v-card-title>
	<v-card-text>
	  {{$t('Your email:')}} <b> {{ $user.identity.email }}</b>
	</v-card-text>
  </v-card>
</template>

<style scoped lang="scss">

</style>