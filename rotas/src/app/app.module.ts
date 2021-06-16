import { AlimentosModule } from './alimentos/alimentos.module';
import { AppRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { CardapioModule } from './cardapio/cardapio.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    CardapioModule,
    AlimentosModule,
    AppRoutingModule
  ],
  //providers: [CardapioService],
  bootstrap: [AppComponent]
})

export class AppModule { }
