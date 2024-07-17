import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../data/item';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input()item!: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
