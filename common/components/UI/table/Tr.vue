<script setup lang="ts">
import {PropType} from "@vue/runtime-core";

interface IProps {
  clickable: boolean
}

const { clickable } = defineProps({
  clickable: {
	type: Boolean as PropType<boolean>,
	default: false
  }
})

</script>

<template>
  <tr class="tr" :class="{clickable}">
	<slot />
  </tr>
</template>

<style scoped lang="scss">
.tr {
  position: relative;
}
.clickable {
  cursor: pointer;
  &::after {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 8px;
  }
  &:hover {
	&::after {
	  background-color: $color_emerald;
	}
  }
}
</style>