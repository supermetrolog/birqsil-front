<script setup lang="ts">

import {NuxtApp} from "#app";
import Modal from "~/components/UI/Modal.vue";
import {Ref} from "vue";
import MenuItem from "~/domain/entities/MenuItem";
import MenuTable from "~/components/domain/base/menu/list/MenuTable.vue";
import {PropType} from "@vue/runtime-core";
import {integer} from "vscode-languageserver-types";

interface IProps {
  restaurantId: integer,
}

const {restaurantId}: IProps = defineProps({
  restaurantId: {
	type: Number as PropType<integer>,
	required: true
  }
});

const {$menuService, $i18n, $router}: NuxtApp = useNuxtApp();
const menuItems: Ref<MenuItem[]> = ref(await $menuService.getAll(restaurantId));

const emit = defineEmits(['clickDelete', 'clickUpdate', 'clickView'])



let modal: Modal = ref(null);
const deleteBtnClickHandler = async (item: MenuItem) => {
  const isConfirmed: boolean = await modal.value.open({
	message: $i18n.t("You really want delete menu item with title:") + " " + item.title + "?",
  })
  
  if (!isConfirmed) {
	return;
  }
  
  if (await $menuService.delete(item)) {
	menuItems.value = menuItems.value.filter((item: MenuItem) => item.id !== item.id);
  }
}

const updateBtnClickHandler = (item: MenuItem) => {
  $router.push('/menu/update/' + item.id);
}

const viewBtnClickHandler = (item: MenuItem) => {
  $router.push('/menu/' + item.id);
}

</script>

<template>
  <div></div>
  <Modal ref="modal"/>
  <MenuTable
	  :menuItems="menuItems"
	  @clickDelete="deleteBtnClickHandler"
	  @clickUpdate="updateBtnClickHandler"
	  @clickView="viewBtnClickHandler"
  />
</template>

<style scoped lang="scss">

</style>