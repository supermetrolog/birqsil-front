<template>
  <div class="error-container" v-if="v">
	 <div class="messages">
       <p
           class="message"
           v-for="message in v.$getErrors()"
       >
         {{message}}
       </p>
     </div>
  </div>
</template>

<script setup lang="ts">
  import {PropType} from "@vue/runtime-core";
  import Validator from "~/domain/interfaces/Validator";
  
  const { v } = defineProps({
      v: {
        type: Object as PropType<Validator>,
        required: false,
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