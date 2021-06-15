import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio-detalhes',
  templateUrl: './cardapio-detalhes.component.html',
  styleUrls: ['./cardapio-detalhes.component.css']
})
export class CardapioDetalhesComponent implements OnInit {

  id: string = '';

  constructor(private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
