<script setup lang="ts">

import {NuxtApp} from "#app";
import Modal from "~/components/UI/Modal.vue";
import {Ref} from "vue";
import MenuItem from "~/domain/entities/MenuItem";
import MenuTable from "~/components/domain/base/menu/list/MenuTable.vue";
import {PropType} from "@vue/runtime-core";
import {integer} from "vscode-languageserver-types";
import Category from "~/domain/entities/Category";
import CategoryTable from "~/components/domain/base/category/list/CategoryTable.vue";

interface IProps {
  restaurantId: integer,
}

const {restaurantId}: IProps = defineProps({
  restaurantId: {
	type: Number as PropType<integer>,
	required: true
  }
});

const {$categoryService, $i18n, $router}: NuxtApp = useNuxtApp();
const categories: Ref<Category[]> = ref(await $categoryService.getAll(restaurantId));

const emit = defineEmits(['clickDelete', 'clickUpdate'])



let modal: Modal = ref(null);
const deleteBtnClickHandler = async (item: Category) => {
  const isConfirmed: boolean = await modal.value.open({
	message: $i18n.t("You really want delete menu item with name:") + " " + item.name + "?",
  })
  
  if (!isConfirmed) {
	return;
  }
  
  if (await $categoryService.delete(item)) {
	categories.value = categories.value.filter((item: Category) => item.id !== item.id);
  }
}

const updateBtnClickHandler = (item: MenuItem) => {
  $router.push('/category/update/' + item.id);
}

const viewBtnClickHandler = (item: MenuItem) => {
  $router.push('/category/' + item.id);
}

</script>

<template>
  <div></div>
  <Modal ref="modal"/>
  <CategoryTable
	  :categories="categories"
	  @clickDelete="deleteBtnClickHandler"
	  @clickUpdate="updateBtnClickHandler"
  />
</template>

<style scoped lang="scss">

</style>