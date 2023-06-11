<script setup lang="ts">

</script>

<template>
<table class="table">
  <thead>
	  <slot name="head"/>
  </thead>
  <tbody>
	  <slot name="body"/>
  </tbody>
</table>
</template>

<style scoped lang="scss">
	.table {
	  width: 100%;
	}
	
	.table, .th, .td {
	  border-collapse: collapse;
	}
</style>