import {useBreadcrumbs} from "~/composables/breadcrumbs";

export default defineNuxtRouteMiddleware((): void => {
    const breadcrumbs = useBreadcrumbs();
    breadcrumbs.value = [];
})