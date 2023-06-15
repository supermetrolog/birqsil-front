import {NuxtApp} from "#app";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    const vuetify = createVuetify({
       ssr: true,
        components,
        directives
    });

    nuxtApp.vueApp.use(vuetify)
});