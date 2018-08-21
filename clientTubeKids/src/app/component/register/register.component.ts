import { Component,OnInit} from '@angular/core';
import { UsersService} from '../../services/users.service';
import {User} from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})

export class RegisterComponent implements OnInit {
  users: User[];
  user = new User();
  constructor(private userServices: UsersService, private router:Router) {
      /* this.userServices.getUsers()
      .subscribe(users => {
      console.log(users);
      this.users = users;
      });
      */
  }

  ngOnInit() {}

  addUser(event) {
      event.preventDefault();
      if (this.validation(this.user) == false) {
          console.log(this.user);
          this.userServices.addUser(this.user)
              .subscribe(user => {
                  console.log(user);
                  this.user = user;
                  
                  alert("Registro Exitoso, revise su correo para activar su cuenta");
                  this.router.navigate(['/login'])
              });
      } else {
          alert("registro fallido");
      }
     // return;
  }

  
  
  validation = function(user) {
      var fechaHoy = new Date();
      var fechaNacimiento = new Date(user.birthdate);
      var edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
      var months = fechaHoy.getMonth() - fechaNacimiento.getMonth();
      if (months <
          0 || (months === 0 && fechaHoy.getDate() <
              fechaNacimiento.getDate())) {
          edad--;
      }
      if (edad <
          18) {
          alert("Estimado usuario, solamente personas mayores de edad pueden registrarse");
          return true;
      }
      if (user.password != user.repeatPassword) {
          alert("Las contrasenas no coinciden");
          return true;
      }
      return false;
  }
  /* 
    deleteUser(id) {
    const response = confirm('are you sure to delete it?');
    if (response ){
    const users = this.users;
    this.userServices.deleteUser(id)
    .subscribe(data => {
console.log(data.n);
if(data.n == 1) {
for(let i = 0; i 
< users.length; i++) {
               if(users[i]._id == id) {
               users.splice(i, 1);
               }
               }
               }
               })
               }
               }                 
               updateUser(user: User) {
               var newUser = {            
               _id: user._id,
               firstName: user.firstName,
               surnames: user.surnames,
               email: user.email,
               password: user.password,
               country: user.country,
               date:user.fecha
               };
               this.userServices.updateUser(newUser)
               .subscribe(user => {
  this.users.push(user);
  console.log(this.users);
  this.firstName = '';
  this.surnames = '';
  this.email = '';
  this.password = '';
  this.repeatPassword = '';
  this.country = '';
  })*/
}