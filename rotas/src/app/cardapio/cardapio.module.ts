import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CardapioService } from './cardapio.service';
import { CardapioNaoEncontradoComponent } from './cardapio-nao-encontrado/cardapio-nao-encontrado.component';
import { CardapioDetalhesComponent } from './cardapio-detalhes/cardapio-detalhes.component';
import { CardapioComponent } from "./cardapio.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        CardapioComponent,
        CardapioDetalhesComponent,
        CardapioNaoEncontradoComponent
    ],
    providers: [CardapioService],
})

export class CardapioModule {

}