import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoAttualeComponent } from './meteo/meteo-attuale/meteo-attuale.component';
import { MeteoPrevisioniComponent } from './meteo/meteo-previsioni/meteo-previsioni.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NoAutorizationComponent } from './no-autorization/no-autorization.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoAttualeComponent,
    MeteoPrevisioniComponent,
    NavbarComponent,
    NoAutorizationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
