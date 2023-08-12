<template>
	<div class="card">
		<slot />
	</div>
</template>

<script setup>
</script>

<style scoped lang="scss">
	.card {
	  width: 100%;
      background-color: white;
	  padding: $gap6;
	  border-radius: $border_radius;
	}
</style>