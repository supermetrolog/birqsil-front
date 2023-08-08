import {useState} from "#app";
import MenuItem from "~/domain/entities/MenuItem";

export const useCard = () => useState<MenuItem[]>('card', (): MenuItem[] => []);