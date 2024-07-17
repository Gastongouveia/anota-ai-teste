import { Component, OnInit } from '@angular/core';
import { Item } from '../../data/item';
import { ItemsService } from '../../services/items.service';
import { CardComponent } from "../card/card.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, NgForOf],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

}
