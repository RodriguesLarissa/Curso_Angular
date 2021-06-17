import { CardapioService } from '../cardapio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cardapio-detalhes',
  templateUrl: './cardapio-detalhes.component.html',
  styleUrls: ['./cardapio-detalhes.component.css']
})
export class CardapioDetalhesComponent implements OnInit {

  id: number = 0;
  inscricao: Subscription = new Subscription;
  comida: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardapioServices: CardapioService) { 
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.comida = this.cardapioServices.getComida(this.id);

        if(this.comida == null){
          this.router.navigate(['cardapio/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
