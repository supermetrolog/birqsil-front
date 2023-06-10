<template>
  <div class="container">
	<label class="label">
	  {{ label }}
	</label>
	<input
		class="input"
		name="test"
		:type="type"
		:value="modelValue"
		@input.prevent="handleInput($event.target.value.trim())"
	/>
	<ValidateError :errors="v.$getErrors()"/>
  </div>
</template>

<script setup lang="ts">
import InputType from "~/enums/InputType";
import {PropType} from "@vue/runtime-core";
import Validator from "~/domain/interfaces/Validator";
import ValidateError from "~/components/UI/form/ValidateError.vue";

interface IProps {
  modelValue: string | number;
  type: InputType;
  label: string;
  v: Validator
}

const {v, modelValue, type, label}: IProps = defineProps({
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
  v: {
	type: Object as PropType<Validator>,
	required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const handleInput = async (value: string) => {
  emit("update:modelValue", value);
  v.$touch();
}

</script>

<style scoped lang="scss">
.container {
  margin: $gap1 0;
}

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
	border: 1px solid rgba($color_emerald, 0.1);
	outline: 1px solid rgba($color_emerald, 0.1);
  }
}
</style>