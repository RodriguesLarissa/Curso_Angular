import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioDetalhesComponent } from './cardapio-detalhes/cardapio-detalhes.component';
import { CardapioService } from './cardapio/cardapio.service';
import { CardapioNaoEncontradoComponent } from './cardapio-nao-encontrado/cardapio-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CardapioComponent,
    CardapioDetalhesComponent,
    CardapioNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing
  ],
  providers: [CardapioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
