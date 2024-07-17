import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "../data/item";

@Pipe({
    name: "filter",
    standalone: true,
})
export class FilterPipe implements PipeTransform {
    transform(items: Item[], searchText: string): Item[] {
        console.log(searchText);
        if (!items || !searchText) {
            return items;
        }
        return items.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()) || 
        item.description.toLowerCase().includes(searchText.toLowerCase()));
    }
}