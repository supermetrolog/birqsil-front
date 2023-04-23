<template>
	<button
	  class="btn"
	  :class="[{disabled: disabled}, color]"
	  :disabled="disabled"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import Color from "~/enums/Color";

interface IProps {
    color: Color;
    disabled: boolean;
}

const props: IProps = defineProps({
	color: {
        type: String as PropType<Color>,
		required: true,
	},
	disabled: {
        type: Boolean,
		required: false,
		default: false,
	}
});
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  padding: 10px 15px;
  border: unset;
  border-radius: $border_radius;
  
  &.disabled {
    background-color: $color_gray!important;
    cursor: default;
    &:active {
      transform: unset;
    }
  }
  &:active {
	transform: scale(.95);
  }
  
  &.warning {
    background-color: $color_warning;
	color: $color_white;
  }
  &.danger {
    background-color: $color_danger;
	color: $color_white;
  }
  &.success {
    background-color: $color_success;
	color: $color_white;
  }
  &.primary {
    background-color: $color_primary;
	color: $color_white;
  }
  &.dark {
    background-color: $color_dark;
	color: $color_white;
  }
  &.emerald {
    background-color: $color_emerald;
    color: $color_white;
  }
}
</style>