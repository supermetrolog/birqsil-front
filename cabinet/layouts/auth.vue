<template>
	<div class="layout">
        <div class="layout-center-container">
            <Card>
                <div class="logo">
                    <p>bir<span>q</span>sil</p>
                </div>
                <slot />
            </Card>
        </div>
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

.layout-center-container {
  display: flex;
  width: 400px;
}
.logo {
  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    letter-spacing: 5px;
    font-style: italic;
    span {
      color: $color_emerald;
    }
  }
}
.submit-button-container {
  margin-top: $gap1;
  button {
    font-weight: bold;
  }
}
</style>
<script setup lang="ts">
import Card from "../../common/components/UI/card/Card.vue";
import Button from "../../common/components/UI/Button.vue";
</script>