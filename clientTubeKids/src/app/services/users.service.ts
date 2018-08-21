import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  domain: string = 'http://localhost:3977';


  getUsers() {
    return this.http.get<User[]>(`${this.domain}/api/users`)
      .map(res => res);
  }

 
  addUser(newUser: User) {
    return this.http.post<User>(`${this.domain}/api/register`, newUser)
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
  
  /*registerUser(user: User){
    const body: User ={
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      birthdate: user.birthdate,
      country: user.country,
      password: user.password,
      user_type: user.user_type

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.domain+ '/api/register',body,{headers:reqHeader});
  }*/

  /*userAuthentification(email,password){
    console.log("hola");
    var data = "email="+email+"&password="+password;
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded','No-Auth':'True'});
    return this.http.post(this.domain+'/token',data,{headers:reqHeader});
  }*/


  /*userAuthentification(email,password){
    
    console.log(email,password);
    var data = "email="+email+"&password="+password;
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded','No-Auth':'True'});
    return this.http.post(this.domain+'/api/login',data,{headers:reqHeader});
  }*/

  userAuthentification(email,password) {
    var data = "email="+email+"&password="+password;
    return this.http.post<User>(`${this.domain}/api/login`, data)
      .map(res => res);
  }
  
  //cambiarle la direccion ulr a como se llama en el back in.
  getUserClaims(){
    return this.http.get(this.domain+'/api/login');
  }

}
