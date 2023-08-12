<script setup lang="ts">

import {ComputedRef, Ref} from "vue";
import MenuItem from "~/domain/entities/MenuItem";
import {CartAction, useCart} from "~/composables/front/card";
import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import {uniqueArray} from "~/../helpers/Array";

definePageMeta({
  layout: 'menu'
});
const cart: Ref<MenuItem[]> = useCart();
const items: ComputedRef<MenuItem[]> = computed(() => {
  return uniqueArray(cart.value);
});
</script>

<template>
  <div>
	<MenuSplit
		:items="items"
		:selectedMenuItems="cart"
		@clickMinus="(item: MenuItem): void => CartAction.remove(item)"
		@clickPlus="(item: MenuItem): void => CartAction.add(item)"
	/>
  </div>
</template>

<style scoped lang="scss">

</style>