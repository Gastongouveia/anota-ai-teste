import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../data/item';
import { NgClass } from '@angular/common';
import { ItemTypeClass, ItemTypeLabels } from '../../data/item-type-enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input()item!: Item;
  @Output()deleteItem = new EventEmitter<Item>();

  deleteItemHandler() {
    this.deleteItem.emit(this.item);
  }

  tagText!: string;
  tagClass!: string;
  
  constructor() { }

  ngOnInit(): void {
    this.tagText = ItemTypeLabels[this.item.type];
    this.tagClass = ItemTypeClass[this.item.type];
  }

}
