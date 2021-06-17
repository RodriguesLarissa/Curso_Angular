import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CardapioGuard } from './guards/cardapio.guard';

const appRoutes: Routes = [

    { path: 'cardapio', 
        loadChildren: () => import('./cardapio/cardapio.module').then(m => m.CardapioModule),
        canActivate: [AuthGuard],
        canActivateChild: [CardapioGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alimentos', 
        loadChildren: () => import('./alimentos/alimentos.module').then(m => m.AlimentosModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
        //canActivateChild: [AlimentosGuard]
    },
    { path: 'login', 
        component: LoginComponent 
    },
    { path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    }

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

