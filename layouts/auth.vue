<template>
	<div class="layout">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  background-color: darken($color_white, 2);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>