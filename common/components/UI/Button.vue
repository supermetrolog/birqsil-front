<template>
	<button
	  class="btn"
	  :class="[color, {
          disabled: disabled,
          large: large
      }]"
	  :disabled="disabled"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import Color from "../../enums/Color";

defineProps({
	color: {
        type: String as PropType<Color>,
		required: true,
	},
	disabled: {
        type: Boolean,
		required: false,
		default: false,
	},
	large: {
        type: Boolean,
		required: false,
		default: false
	}
});
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  padding: 10px 15px;
  border: unset;
  border-radius: $border_radius;
  
  &.large {
	width: 100%;
  }
  
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
  &.emerald-gradient {
    color: $color_white;
    background: linear-gradient(to right, $color_emerald, rgb(51, 139, 147));
	&:hover {
      background: linear-gradient(to right, rgb(51, 139, 147), $color_emerald);
	}
  }
}
</style>