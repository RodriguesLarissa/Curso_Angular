import { Injectable } from '@angular/core';
import { Alimento } from './alimento';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService{

  private alimentos: Alimento[] = [
    {id: 1, nome: 'Alimento 01', descricao: 'Alimento 01'},
    {id: 2, nome: 'Alimento 02', descricao: 'Alimento 02'},
    {id: 3, nome: 'Alimento 03', descricao: 'Alimento 03'}
  ];

  getAlimentos(){
    return this.alimentos;
  }

  getAlimento(id: number){
    for(let i=0; i<this.alimentos.length; i++){
      let alimento = this.alimentos[i];
      if(alimento.id == id){
        return alimento;
      }
    }
    return null;
  }

  constructor() { }
}
