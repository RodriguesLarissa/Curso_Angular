import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

    { path: 'cardapio', loadChildren: () => import('./cardapio/cardapio.module').then(m => m.CardapioModule) },
    { path: 'alimentos', loadChildren: () => import('./alimentos/alimentos.module').then(m => m.AlimentosModule) },
    { path: 'login', component: LoginComponent },
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