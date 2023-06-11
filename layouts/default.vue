<template>
	<div class="layout">
	  <div class="container">
		<Header />
		<slot />
	  </div>
	</div>
</template>
<script setup lang="ts">


import Header from "~/components/domain/base/layout/default/Header.vue";
</script>

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 0 auto;
}
</style>