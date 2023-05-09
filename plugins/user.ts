import UserComponentFactory from "~/domain/factories/UserComponentFactory";
import {NuxtApp} from "#app";

export default defineNuxtPlugin((nuxtApp: NuxtApp)=> {
    return {
        provide: {
            user: UserComponentFactory.create(),
        }
    }
})