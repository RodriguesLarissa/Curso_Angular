import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosService } from './cursos/cursos.service';
import { CursoModule } from './cursos/cursos.module';
import { LogService } from './servicos/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],
   providers: [
     LogService
  // CursosService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
