import { ItemType } from "./item-type-enum";

export interface Item {
    id: number;
    title: string;
    description: string;
    img: string;
    type: ItemType;
}