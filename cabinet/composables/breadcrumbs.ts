import {useState} from "#app";

export interface Breadcrumb {
    title: string,
    disabled: boolean,
    to: string
}

export const useBreadcrumbs = () => useState<Breadcrumb[]>('breadcrumbs', (): Breadcrumb[] => []);