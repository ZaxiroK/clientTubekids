import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Video} from '../models/Video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }
  domain: string = 'http://localhost:3977';


 

  addVideo(newVideo: Video, token: string) {
    
    return this.http.post<Video>(`${this.domain}/api/saveVideo`, newVideo,{headers: { Authorization: token}})
      .map(res => res);
  }
  getVideosS(token: string) {
    return this.http.get<Video[]>(`${this.domain}/api/videos` ,{headers: { Authorization: token}})
      .map(res => res);
  }
  
}
