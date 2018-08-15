import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';


import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, ) { }
  domain: string = 'http://localhost:3000';

  getUsers() {
    return this.http.get<User[]>(`${this.domain}/api/users`)
      .map(res => res);
  }

 
  addUser(newUser: User) {
    return this.http.post<User>(`${this.domain}/api/users`, newUser)
      .map(res => res);
  }

  deleteUser(id) {
    return this.http.delete<User>(`${this.domain}/api/users/${id}`)
      .map(res => res);
  }

  updateUser(newUser) {
    return this.http.put<User>(`${this.domain}/api/users/${newUser._id}`, newUser)
      .map(res => res)
  }
  

}
