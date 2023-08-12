import Vue3Toastify, {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
import {NuxtApp} from "#app";

export interface Toast {
    success(content: string, options: Object): void;
    error(content: string, options: Object): void;
}

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    nuxtApp.vueApp.use(Vue3Toastify);

    return {
        provide: { toast },
    };
})