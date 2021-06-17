import { AlimentoService } from './../alimento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alimento-form',
  templateUrl: './alimento-form.component.html',
  styleUrls: ['./alimento-form.component.css']
})
export class AlimentoFormComponent implements OnInit {

  alimento: any;
  inscricao: Subscription = new Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alimentoService: AlimentoService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.alimento = this.alimentoService.getAlimento(id);

        if(this.alimento === null){
          this.alimento = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

}
