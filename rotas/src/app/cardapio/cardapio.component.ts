import { Component, OnInit } from '@angular/core';

import { CardapioService } from './cardapio.service';

@Component({
  selector: 'cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio: any[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapio = this.cardapioService.getCardapio();
  }

}
