import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { AlimentosComponent } from './alimentos.component';
import { AlimentoDetalheComponent } from './alimento-detalhe/alimento-detalhe.component';
import { AlimentoFormComponent } from './alimento-form/alimento-form.component';
import { AlimentosGuard } from '../guards/alimentos.guard';
import { AlimentosDeactivateGuard } from '../guards/alimentos-deactivate.guard';

const alimentosRoutes = [
    {path: '', component: AlimentosComponent, 
    canActivateChild: [AlimentosGuard],
    children: [
        {path: 'novo', component: AlimentoFormComponent},
        {path: ':id', component: AlimentoDetalheComponent},
        {path: ':id/editar', component: AlimentoFormComponent,
            canDeactivate: [AlimentosDeactivateGuard]}, 
    ]},
];

@NgModule({

    imports: [RouterModule.forChild(alimentosRoutes)],
    exports: [RouterModule]

})

export class AlimentosRoutingModule {

}