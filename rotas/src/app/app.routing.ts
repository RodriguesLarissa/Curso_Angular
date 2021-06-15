import { CardapioDetalhesComponent } from './cardapio-detalhes/cardapio-detalhes.component';
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const APP_ROUTES: Routes = [

    { path: 'cardapios', component: CardapioComponent },
    { path: 'cardapio/:id', component: CardapioDetalhesComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);