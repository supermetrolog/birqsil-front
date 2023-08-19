<script setup lang="ts">

import {ComputedRef, Ref} from "vue";
import {CartAction, useCart} from "~/composables/card";
import MenuSplit from "~/components/domain/base/menu/split-list/MenuSplit.vue";
import MenuItem from "../../../common/domain/entities/MenuItem";
import {uniqueArray} from "../../../common/helpers/Array";

const cart: Ref<MenuItem[]> = useCart();
const items: ComputedRef<MenuItem[]> = computed(() => {
  return uniqueArray(cart.value);
});
</script>

<template>
  <v-container fluid>
	<MenuSplit
		:items="items"
		:selectedMenuItems="cart"
		@clickMinus="(item: MenuItem): void => CartAction.remove(item)"
		@clickPlus="(item: MenuItem): void => CartAction.add(item)"
	/>
  </v-container>
</template>

<style scoped lang="scss">

</style>