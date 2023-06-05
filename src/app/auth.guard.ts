import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from './share/autorization.service';

//authGuard è una funzione, non è una classe, devo fare l'injection attraverso il metodo inject()
export const authGuard: CanActivateFn = (route, state) => {

  //Questo sotto è lo stesso identico principio della dependency injection solo che è fatto attraverso un metodo e non nel costruttore.
  const authService = inject(AuthorizationService);
  const router = inject(Router);


  if(authService.controllaPassword()){
    return true;
  }else{
    return router.navigate(['/login']);
  }
};
