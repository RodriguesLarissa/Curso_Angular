import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './guards/auth.guard';
import { CardapioGuard } from './guards/cardapio.guard';
import { AlimentosGuard } from './guards/alimentos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CardapioGuard,
    AlimentosGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
