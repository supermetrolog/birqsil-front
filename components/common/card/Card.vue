<template>
	<div class="card">
		<slot />
	</div>
</template>

<script setup>
</script>

<style scoped lang="scss">
	.card {
      background-color: white;
	  border: 1px solid darken($color_white, 5);
	  padding: 2rem;
	  border-radius: $border_radius;
	}
</style>