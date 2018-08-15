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
    this.firstName = '';
        this.surnames = '';
        this.email = '';
        this.password = '';
        this.repeatPassword = '';
        this.country = '';
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
/*
  deleteTask(id) {
    const response = confirm('are you sure to delete it?');
    if (response ){
      const tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe(data => {
          console.log(data.n);
          if(data.n == 1) {
            for(let i = 0; i < tasks.length; i++) {
              if(tasks[i]._id == id) {
                tasks.splice(i, 1);
              }
            }
          }
        })
    }
  }                 

  updateStatus(task: Task) {
    var newTask = {            
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskService.updateTask(newTask)
      .subscribe(res => {
        task.isDone = !task.isDone;
      })
  }

*/
}
