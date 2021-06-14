import { CursosComponent } from './cursos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  providers: [
    CursosService
  ]
})
export class CursoModule { }
