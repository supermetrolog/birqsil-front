<script setup lang="ts">

import {NuxtApp} from "#app";
import Modal from "../../../../../common/components/UI/Modal.vue";
import {Ref} from "vue";
import MenuItem from "../../../../../common/domain/entities/MenuItem";
import MenuTable from "~/components/domain/base/menu/list/MenuTable.vue";
import {PropType} from "@vue/runtime-core";
import {integer} from "vscode-languageserver-types";
import Category from "../../../../../common/domain/entities/Category";
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

const fetchItems = async (): Promise<Category[]> => await $categoryService.getAll(restaurantId);

const categories: Ref<Category[]> = ref(await fetchItems());

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

const sortUp = async (item: Category) => {
  await $categoryService.sortUp(categories.value, item);
  categories.value = await fetchItems();
}

const sortDown = async (item: Category) => {
  await $categoryService.sortDown(categories.value, item);
  categories.value = await fetchItems();
}
</script>

<template>
  <div></div>
  <Modal ref="modal"/>
  <CategoryTable
	  :categories="categories"
	  @clickDelete="deleteBtnClickHandler"
	  @clickUpdate="updateBtnClickHandler"
	  @clickSortUp="sortUp"
	  @clickSortDown="sortDown"
  />
</template>

<style scoped lang="scss">

</style>