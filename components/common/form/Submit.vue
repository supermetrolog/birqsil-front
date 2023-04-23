<template>
    <div class="container">
        <button class="btn btn-large" :class="buttonClasses" :disabled="disabled">
            <slot />
        </button>
    </div>
</template>

<script setup lang="ts">
const props: Object = defineProps({
    buttonClasses: {
        type: String,
        default: 'text'
    },
    disabled: {
        type: Boolean,
    }
})
</script>

<style scoped lang="scss">
.label {
  display: block;
  text-transform: capitalize;
}
</style>