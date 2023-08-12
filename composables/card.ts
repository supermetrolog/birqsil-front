import {useState} from "#app";
import MenuItem from "~/domain/entities/MenuItem";

export const useCart = () => useState<MenuItem[]>('card', (): MenuItem[] => []);