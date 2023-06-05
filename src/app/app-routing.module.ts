import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoAttualeComponent } from './meteo/meteo-attuale/meteo-attuale.component';
import { MeteoPrevisioniComponent } from './meteo/meteo-previsioni/meteo-previsioni.component';
import { LoginComponent } from './login/login.component';
import { NoAutorizationComponent } from './no-autorization/no-autorization.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "meteo",
    component: MeteoComponent,
  },
  {
    path: "meteoattuale",
    component: MeteoAttualeComponent,
  },
  {
    path: "meteoprevisioni",
    component: MeteoPrevisioniComponent,canActivate: [authGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "non-auth",
    component:NoAutorizationComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
