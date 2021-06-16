import { AlimentoService } from './alimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  public alimentos: any[] = [];

  constructor(private alimentoService: AlimentoService) { }

  ngOnInit(): void {
    this.alimentos = this.alimentoService.getAlimentos();
  }

}
