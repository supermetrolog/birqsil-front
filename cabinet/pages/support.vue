<script setup lang="ts">
import {useBreadcrumbs} from "~/composables/breadcrumbs";

const { $i18n } = useNuxtApp();

const title = $i18n.t('Support');

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
		{{$t('Send your message to email address:')}} <b>support@birqsil.ru</b>
	</v-card-text>
  </v-card>

</template>

<style scoped lang="scss">

</style>