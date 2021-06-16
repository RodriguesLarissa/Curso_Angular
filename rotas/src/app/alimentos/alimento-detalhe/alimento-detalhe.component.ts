import { AlimentoService } from './../alimento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alimento-detalhe',
  templateUrl: './alimento-detalhe.component.html',
  styleUrls: ['./alimento-detalhe.component.css']
})
export class AlimentoDetalheComponent implements OnInit {

  alimento: any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alimentoService: AlimentoService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.alimento = this.alimentoService.getAlimento(id);
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
