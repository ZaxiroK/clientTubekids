import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {
  //FrmRegister: FormGroup;

  users: User[];
  user = new  User();

 

  
  constructor(private userServices: UsersService/*, private fb: FormBuilder*/) {
   /* this.FrmRegister = this.fb.group({
      firstName: ['',Validators.required],
      surnames: ['',Validators.required],
      email: ['',Validators.email],
      password: ['',Validators.required],
      repeatPassword: ['',Validators.required],
      country: ['',Validators.required],
      fecha: ['',Validators.required],
    })*/

    
  
   /* this.userServices.getUsers()
    .subscribe(users => {
      console.log(users);
    this.users = users;

  });
*/
  }

  ngOnInit() {
  }

  register(){
    
  }
 /*$scope.validarEmail = function() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test($scope.email);
}
[17:07, 16/8/2018] Wilmer: <div class="col-md-4 col-xs-12"></div>
                    <div class="col-md-8 col-xs-12 ">
                        <p class="error" ng-show="!validarEmail();">Email Inválido</p>

                    </div>*/
  addUser(event){
    event.preventDefault();
    validation(this.user);
    
   console.log(this.user.firstName);
    this.userServices.addUser(this.user)
      .subscribe(user => {
        this.users.push(user);
        console.log(this.users);
        user = new User;
        
      })       
  
  function validation(user){
    if(!user.firstName || !user.surnames || !user.email || !user.password || !user.fecha ||
      user.firstName == " "|| user.surnames == "" || user.email == ""|| user.password == ""|| user.fecha == ""){
      alert("Por favor que revise todos los datos esten completos para su registro");
      
    }
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
            for(let i = 0; i < users.length; i++) {
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


}
