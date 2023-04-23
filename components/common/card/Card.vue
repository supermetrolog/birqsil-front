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
	  border: 1px solid darken($color_white, 5);
	  padding: $gap6;
	  border-radius: $border_radius;
	}
</style>