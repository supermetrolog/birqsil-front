import {useState} from "#app";
import MenuItem from "~/domain/entities/MenuItem";
import {Ref} from "vue";
import {integer} from "vscode-languageserver-types";

export const useCart = () => useState<MenuItem[]>('card', (): MenuItem[] => []);


interface ICartAction {
    remove(item: MenuItem): void;
    add(item: MenuItem): void;
}

export const CartAction: ICartAction = {
    remove: (item: MenuItem): void => {
        const cart: Ref<MenuItem[]> = useCart();
        const lastItemIndex: integer = cart.value.findLastIndex((mItem: MenuItem) => mItem.id === item.id);
        cart.value = cart.value.filter((_, idx) => idx !== lastItemIndex);
    },
    add: (item: MenuItem): void => {
        const cart: Ref<MenuItem[]> = useCart();
        cart.value.push(item);
    }
}
