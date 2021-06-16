import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CardapioComponent } from './cardapio.component';
import { CardapioNaoEncontradoComponent } from './cardapio-nao-encontrado/cardapio-nao-encontrado.component';
import { CardapioDetalhesComponent } from './cardapio-detalhes/cardapio-detalhes.component';

const cardapioRoutes: Routes = [

    { path: 'cardapios', component: CardapioComponent },
    { path: 'cardapio/:id', component: CardapioDetalhesComponent },
    { path: 'naoEncontrado', component: CardapioNaoEncontradoComponent },

];

@NgModule({

    imports: [ 
        RouterModule.forChild(cardapioRoutes) 
    ],

    exports: [
        RouterModule
    ]

})
export class CardapioRoutingModule {

}