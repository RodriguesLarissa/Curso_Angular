import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  filme: any = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    rating: 4.54321,
    tempo: 2,
    dataLancamento: new Date(2004, 6, 4),
    sinopse: 'O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black (Gary Oldman) fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação.',
    precoLivro: 30.00
  };

  filmes: string[] = ['Deadpool', 'Cruella'];
  
  filtro!: string;

  addFilme(valor: string){
    this.filmes.push(valor);
  }

  obterFilmes(){

    if(this.filmes.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.filmes;
    }

    return this.filmes.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });

  }

  valorAsync = new Promise((resolve, reject) => 
    setTimeout(() => resolve('Valor Assíncrono'), 2000)
  );

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));


  constructor() { }

  ngOnInit(): void {
  }

}
