import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service';
import {User} from '../../models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  user = new User();
  isLoginError : boolean = false;
  constructor(private userServices: UsersService, private router:Router ) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    this.userServices.userAuthentification(this.user.email,this.user.password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home'])
      
},
(err : HttpErrorResponse)=>{
  this.isLoginError = true;
});
}
}
