import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioNaoEncontradoComponent } from './cardapio-nao-encontrado/cardapio-nao-encontrado.component';
import { CardapioDetalhesComponent } from './cardapio-detalhes/cardapio-detalhes.component';

const appRoutes: Routes = [

    { path: 'cardapios', component: CardapioComponent },
    { path: 'cardapio/:id', component: CardapioDetalhesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'naoEncontrado', component: CardapioNaoEncontradoComponent },
    { path: '', component: HomeComponent }

];

@NgModule({

    imports: [ 
        RouterModule.forRoot(appRoutes) 
    ],

    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}