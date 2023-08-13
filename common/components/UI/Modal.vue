<script setup lang="ts">
import {Ref} from "vue";
import {NuxtApp} from "#app";

const { $i18n }: NuxtApp = useNuxtApp();
interface IModalParams {
  message: string,
  cancelText: string,
  confirmText: string
}

const dialog: Ref<boolean> = ref(false);

const params: Ref<IModalParams> = ref({
  message: "",
  cancelText: "",
  confirmText: ""
})

let currentModalController = null;

const open = (options: IModalParams) => {
	params.value.message = options.message;
	params.value.cancelText = options.cancelText ?? $i18n.t('Cancel');
	params.value.confirmText = options.confirmText ?? $i18n.t('Ok');
  	dialog.value = true;
  
	let resolve;
	let reject;
  	const modalPromise = new Promise((ok, fail) => {
		resolve = ok;
	  	reject = fail;
	})
  
  	currentModalController = {resolve, reject};
	return modalPromise;
}
const confirm = () => {
	dialog.value = false;
	currentModalController.resolve(true);
}

const cancel = () => {
  dialog.value = false;
  currentModalController.resolve(false);
}


defineExpose({
  open
})

</script>

<template>
  <v-dialog
	  v-model="dialog"
	  width="auto"
  >
	<v-card>
	  <v-card-text>
		{{ params.message }}
	  </v-card-text>
	  <v-card-actions>
		<v-btn color="success" block @click="confirm">{{ params.confirmText }}</v-btn>
	  </v-card-actions>
	  <v-card-actions>
		<v-btn color="warning" block @click="cancel">{{ params.cancelText }}</v-btn>
	  </v-card-actions>
	</v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>