import { Component, OnInit } from '@angular/core';
import { UsersAuthService } from '../share/users.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '../share/autorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userServ: UsersAuthService, private router: Router, private authServ:AuthorizationService){
  }

  ngOnInit(): void {
    this.statusChanged = this.authServ.controllaPassword()
    this.user = localStorage.getItem('usernameUtentLoggato');
  }

  user:string

  userUsername: string = "Pippo";
  userPassword: string = "12345";

  statusChanged: Boolean;
  checkPassword:boolean = true



  onLogin(){
   // this.loggedIn = true;
    this.userServ.setUserNamePass(this.userUsername, this.userPassword)
    this.userServ.login();
    this.refresh()
   // this.router.navigate(['/']);
  }

  onLogout(){
    //this.loggedIn = false;
    this.userServ.logout();
    this.statusChanged = false
    this.refresh()
  }


  refresh(): void {
    window.location.reload();
  }
}
