import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service';
import {User} from '../../models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SingIn } from '../../models/SignIn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  user = new User();
  singIn : SingIn = new SingIn();
  token:string;
  isLoginError : boolean = false;
  constructor(private userServices: UsersService, private router:Router ) { 
    
  }

  ngOnInit() {
  }


  login(event) {
    event.preventDefault();
    this.singIn.gethash = true;
    this.userServices.LoginToken(this.singIn).subscribe(res => {
      this.token = res.token;
     localStorage.setItem('userToken', ''+res.token);
     this.loginSucces(this.singIn);
      this.ngOnInit();
    });;
  }

  loginSucces(singIn:SingIn){
    singIn.gethash = false;
    this.userServices.SignInUser(singIn).subscribe(res => {
      this.user = res;
     sessionStorage.setItem('user', JSON.stringify(this.user));
     
     window.location.href= "/home";
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      alert("User or password Invalid")
    });
  }
  
/*
  login(event) {
    event.preventDefault();
    this.userServices.userAuthentification(this.user.email,this.user.password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home'])
      
},
(err : HttpErrorResponse)=>{
  this.isLoginError = true;
  alert("User or password Invalid")
});
}
*/
}
