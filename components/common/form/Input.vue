<template>
	<div class="container">
		<label class="label">
			{{label}}
		</label>
        <input
			class="input"
			name="test"
            :type="type"
			:value="modelValue"
            @input.prevent="handleInput($event.target.value.trim())"
		/>
	</div>
</template>

<script setup lang="ts">
import InputType from "~/enums/InputType";
import {PropType} from "@vue/runtime-core";

interface IProps {
    modelValue: string|number;
    type: InputType;
    label: string;
}

const props: IProps = defineProps({
    modelValue: {
        type: [String, Number],
		required: true,
	},
    type: {
        type: String as PropType<InputType>,
        required: true,
    },
    label: {
        type: String,
		default: ''
    },
})

const emit = defineEmits(['update:modelValue'])
const handleInput = (value: string) => {
    emit("update:modelValue", value);
}

</script>

<style scoped lang="scss">
.label {
  display: block;
  text-transform: capitalize;
}
.input {
  height: 50px;
  padding: 0 15px 0 15px;
  width: 100%;
  border-radius: $border_radius;
  border: 1px solid $color_gray;
  font-size: 18px;
  
  &:focus {
    border: 1px solid $color_emerald;
	outline: 1px solid $color_emerald;
  }
}
</style>