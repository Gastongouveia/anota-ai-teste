import { Component, OnInit } from '@angular/core';
import { Item } from '../../data/item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = items;
    });
  }

}
