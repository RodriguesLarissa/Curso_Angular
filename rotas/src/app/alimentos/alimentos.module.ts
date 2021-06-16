import { AlimentoService } from './alimento.service';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlimentosComponent } from "./alimentos.component";
import { AlimentoFormComponent } from './alimento-form/alimento-form.component';
import { AlimentoDetalheComponent } from './alimento-detalhe/alimento-detalhe.component';
import { AlimentosRoutingModule } from "./alimentos.routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AlimentosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlimentosComponent, 
        AlimentoFormComponent, 
        AlimentoDetalheComponent
    ],
    providers: [AlimentoService]
})

export class AlimentosModule { }