import { AlimentosComponent } from './alimentos.component';
import { AlimentoDetalheComponent } from './alimento-detalhe/alimento-detalhe.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AlimentoFormComponent } from './alimento-form/alimento-form.component';

const alimentosRoutes = [
    {path: 'alimentos', component: AlimentosComponent, children: [
        {path: 'novo', component: AlimentoFormComponent},
        {path: ':id', component: AlimentoDetalheComponent},
        {path: ':id/editar', component: AlimentoFormComponent}, 
    ]},
];

@NgModule({

    imports: [RouterModule.forChild(alimentosRoutes)],
    exports: [RouterModule]

})

export class AlimentosRoutingModule {

}