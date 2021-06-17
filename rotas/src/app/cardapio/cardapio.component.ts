import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CardapioService } from './cardapio.service';

@Component({
  selector: 'cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio: any[] = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription;

  constructor(
    private cardapioService: CardapioService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cardapio = this.cardapioService.getCardapio();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/cardapio'],
      {queryParams: {'pagina': ++this.pagina}});
  }

}
