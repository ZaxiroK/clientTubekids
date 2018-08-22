import { Component, OnInit } from '@angular/core';
import { VideosService} from '../../services/videos.service';
import {Video} from '../../models/Video';
import { PlaylistService} from '../../services/playlist.service';
import {PlayList} from '../../models/PlayList';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css'],
  providers: [VideosService,PlaylistService]
})
export class MyPlaylistComponent implements OnInit {
  videos: Video[];
  video = new Video();
  playlists: PlayList[];
  playlist = new PlayList();
  
  constructor(private videoServices: VideosService, private playlistServices: PlaylistService, private sanitizer:DomSanitizer) { 
    this.getPlaylist();
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

  getPlaylist(){
      
  var ut = localStorage.getItem("userToken");
      this.playlistServices.getPlaylistS(ut)
      .subscribe(playlists => {
      console.log(playlists);
      this.playlists = playlists;
      });
    }

    

  addVideo(event) {
    event.preventDefault();
        console.log(this.video.playlist,this.video.name);
        var u = JSON.parse(sessionStorage.getItem("user"));
        var ut = localStorage.getItem("userToken");
        this.video.IsFromYoutube = true;
        this.video.file = "prueba";
        this.video.user = u.user._id;
        this.videoServices.addVideo(this.video,ut)
            .subscribe(video => {
                console.log(this.video);
                this.video = video;
                alert("Video Agregado!");
            });
    } 

    addPlaylist(event) {
        event.preventDefault();
        console.log(this.playlist.name,this.playlist.description);
        var u = JSON.parse(sessionStorage.getItem("user"));
        var ut = localStorage.getItem("userToken");
        console.log(ut);
        this.playlist.user = u.user._id;
        console.log(this.playlist.user);
            this.playlistServices.addPlaylist(this.playlist,ut)
                .subscribe(playlist => {
                    this.playlist = playlist;
                    alert("Playlist agregada!");
                    
                });
        }

        
    /*getPlaylist(){
        var ut = localStorage.getItem("userToken");
        this.playlistServices.getPlaylistS(ut)
        .subscribe(playlist =>{
            this.playlist = playlist;
        })
    }  */ 
       
}



