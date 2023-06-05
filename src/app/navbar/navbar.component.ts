import { Component, DoCheck } from '@angular/core';
import { AuthorizationService } from '../share/autorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{

  constructor(private authServ: AuthorizationService){
  }

  ngDoCheck(): void {
    if (this.authServ.controllaPassword() !== this.checkUserStatus) {
      // console.log('Valore boolean cambiato');
       this.checkUserStatus = this.authServ.controllaPassword();
     }
  }

  checkUserStatus:boolean


}
