import { Component, OnInit } from '@angular/core';
import { Item } from '../../data/item';
import { ItemsService } from '../../services/items.service';
import { CardComponent } from "../card/card.component";
import { NgForOf } from '@angular/common';
import { FilterPipe } from '../../shared/filter-pipe';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, NgForOf, FilterPipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {
  items: Item[] = [];
  searchText: string = '';

  inputChange(event: any) {
    this.searchText = event.target.value;
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
  }

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(items => {
      this.items = items;
    });
  }

}
