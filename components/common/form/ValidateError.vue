<template>
  <div class="error-container" v-if="errors.length">
	 <div class="messages">
       <p
           class="message"
           v-for="error in errors"
       >
         {{error}}
       </p>
     </div>
  </div>
</template>

<script setup lang="ts">
  import {PropType} from "@vue/runtime-core";
  
  const { v } = defineProps({
      errors: {
        type: Array as PropType<string[]>,
        required: false,
        default: () => []
      }
  });
</script>

<style scoped lang="scss">
  .error-container {
    .message {
      color: $color_danger;
      margin-top: $gap1;
      display: block;
    }
  }
</style>