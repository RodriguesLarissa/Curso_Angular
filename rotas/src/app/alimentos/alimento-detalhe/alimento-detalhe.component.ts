import { AlimentoService } from './../alimento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alimento } from '../alimento';

@Component({
  selector: 'app-alimento-detalhe',
  templateUrl: './alimento-detalhe.component.html',
  styleUrls: ['./alimento-detalhe.component.css']
})
export class AlimentoDetalheComponent implements OnInit {

  alimento!: Alimento;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alimentoService: AlimentoService
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];

    //     this.alimento = this.alimentoService.getAlimento(id);
    //   }
    // );

    console.log('ngOnInit: AlimentoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info);
        this.alimento = info.alimento;
      }
    );


  }

  editarContato(){
    this.router.navigate(['/alimentos', this.alimento.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
