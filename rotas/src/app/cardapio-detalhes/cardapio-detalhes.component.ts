import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cardapio-detalhes',
  templateUrl: './cardapio-detalhes.component.html',
  styleUrls: ['./cardapio-detalhes.component.css']
})
export class CardapioDetalhesComponent implements OnInit {

  id: string = '';
  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) { 
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
