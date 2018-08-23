import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Profile} from '../models/Profile';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }
  domain: string = 'http://localhost:3977';

  /*registerProfile(profile: Profile){
    const body: Profile ={
      name: profile.name,
      username: profile.username,
      pin: profile.pin,
      edad: profile.edad,
      user:profile.user,
      

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.domain+ '/api/profile/register',body,{headers:reqHeader});
  }*/

  addProfile(newProfile: Profile, token: string) {
    

    console.log("pase por aca");
    return this.http.post<Profile>(`${this.domain}/api/register-profile`, newProfile,{headers: { Authorization: token}})
      .map(res => res);
  }

  getProfilesS(token: string) {
    return this.http.get<Profile[]>(`${this.domain}/api/profiles` ,{headers: { Authorization: token}})
      .map(res => res);
  }

  editProfile(newProfile: Profile,id:string, token: string) {
    console.log(newProfile);
    console.log(id);
    console.log(token);
    console.log("pase por aca");
    return this.http.put<Profile>(`${this.domain}/api/update-profile/`+id, newProfile,{headers: { Authorization: token}})
      .map(res => res);
  }

  deleteProfile(id:string, token: string) {
    console.log("pase por aca");
    return this.http.delete<Profile>(`${this.domain}/api/delete-profile/`+id,{headers: { Authorization: token}})
      .map(res => res);
  }

}
