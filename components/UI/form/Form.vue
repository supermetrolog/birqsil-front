<template>
	<form class="form">
	 	 <ValidateError :errors="errors"/>
		<slot />
	</form>
</template>

<script setup lang="ts">
import ValidateError from "~/components/UI/form/ValidateError.vue";
import {PropType} from "@vue/runtime-core";

defineProps({
  errors: {
	type: Array as PropType<string[]>,
	required: false,
	default: () => []
  }
})
</script>

<style scoped>

</style>