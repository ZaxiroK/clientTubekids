import { Component, OnInit } from '@angular/core';
import { VideosService} from '../../services/videos.service';
import {Video} from '../../models/Video';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideosService]
})

export class HomeComponent implements OnInit {
  videos: Video[];
  video = new Video();
  constructor(private videoServices: VideosService, private sanitizer:DomSanitizer) { 
    this.getVideos();
  }

  ngOnInit() {
  }

  getVideos(){
    var ut = localStorage.getItem("userToken");
        this.videoServices.getVideosS(ut)
        .subscribe(videos => {
        console.log(videos);
        this.videos = videos;
        });
      }

}
