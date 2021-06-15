import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  getCardapio(){
    return [
      {id: 1, nome: 'X-Burguer'},
      {id: 2, nome: 'Batata Fritas'}
    ];
  }

  getComida(id: number){
    let cardapio = this.getCardapio();
    for(let i=0; i<cardapio.length; i++){
      if(cardapio[i].id == id){
        return cardapio[i];
      }
    }
    return null;
  }

  constructor() { }
}
