import { Injectable } from '@angular/core';
import {PlayList} from '../models/PlayList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }
  domain: string = 'http://localhost:3977';


  addPlaylist(newPlayList: PlayList, token: string) {
    console.log("aca voy");
    return this.http.post<PlayList>(`${this.domain}/api/playlistSave`, newPlayList ,{headers: { Authorization: token}})
      .map(res => res);
  }
  getPlaylistS(token: string) {
    return this.http.get<PlayList[]>(`${this.domain}/api/playlists` ,{headers: { Authorization: token}})
      .map(res => res);
  }

  /*addUser(newUser: perfil,token: string) {
   
    return this.http.post<perfil>(`${this.baseUrl}`, newUser ,{headers: { Authorization: token}})
      .map(user => user);
  }*/
}
