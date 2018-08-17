import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {
  users: User[];
  firstName: string;
  surnames: string;
  email: string;
  password: string;
  repeatPassword: string;
  country: string;
  date: Date;
  
  constructor(private userServices: UsersService) { 
    this.userServices.getUsers()
    .subscribe(users => {
      console.log(users);
    this.users = users;

  });

  }

  ngOnInit() {
  }

  addUser(event){
    event.preventDefault();
    const newUser:User = {
      firstName: this.firstName,
      surnames:this.surnames,
      email:this.email,
      password:this.password,
      repeatPassword:this.repeatPassword,
      country:this.country,
      date:this.date

      
    };
    console.log(newUser);
    this.userServices.addUser(newUser)
      .subscribe(user => {
        this.users.push(user);
        console.log(this.users);
        this.firstName = '';
        this.surnames = '';
        this.email = '';
        this.password = '';
        this.repeatPassword = '';
        this.country = '';
        
      })        
  }

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
      repeatPassword: user.repeatPassword,
      country: user.country,
      date:user.date
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
      
    })
  }


}
