<script setup lang="ts">

</script>

<template>
	<tr class="tr">
	  	<slot />
	</tr>
</template>

<style scoped lang="scss">
	.tr {
	  border-collapse: collapse;
	  &:nth-child(even) {
		background-color: $color_gray;
	  }
	}
</style>