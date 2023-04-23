<template>
	<div class="layout">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  background-color: $color_white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>