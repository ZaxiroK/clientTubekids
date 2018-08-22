import { Component, OnInit } from '@angular/core';
import { ProfilesService} from '../../services/profiles.service';
import {Profile} from '../../models/Profile';


@Component({
  selector: 'app-manage-profiles',
  templateUrl: './manage-profiles.component.html',
  styleUrls: ['./manage-profiles.component.css'],
  providers: [ProfilesService]
})
export class ManageProfilesComponent implements OnInit {
  profiles: Profile[];
  profile = new Profile();
  constructor(private profileServices: ProfilesService) { 
    this.getProfiles();
  }

  ngOnInit() {
  }



  getProfiles(){
      
    var ut = localStorage.getItem("userToken");
        this.profileServices.getProfilesS(ut)
        .subscribe(profiles => {
        console.log(profiles);
        this.profiles = profiles;
        });
      }


  addProfile(event) {
    event.preventDefault();
    console.log(this.profile.name,this.profile.pin,this.profile.edad,this.profile.username);
    var ul = JSON.parse(sessionStorage.getItem("user"));
    this.profile.user = ul.user._id;
    console.log(this.profile.user);
        var ut = localStorage.getItem("userToken");
        console.log(ut);
        this.profileServices.addProfile(this.profile, ut)
            .subscribe(profile => {
                console.log(this.profiles);
                profile =  profile;
                alert("Registro de profile exitoso");
            });
    //} else {
     //   alert("registro fallido");
    //}
}



editProfile(event) {
    event.preventDefault();
    console.log(this.profile.name,this.profile.pin,this.profile.edad,this.profile.username);
    
        var ut = localStorage.getItem("userToken");
        var ul = JSON.parse(sessionStorage.getItem("user"));
        var uid = this.profile._id;
        var profileEdit = new Profile;
        profileEdit.name = this.profile.name;
        profileEdit.username = this.profile.username;
        profileEdit.edad = this.profile.edad;
        profileEdit.pin = this.profile.pin;
        profileEdit.user = ul.user._id;
        
        this.profileServices.editProfile(profileEdit,uid, ut)
            .subscribe(profile => {
                console.log(this.profiles);
                profile =  profile;
                alert("Edit exitoso");
            });
}

deleteProfile(event) {
    event.preventDefault();
    
    
        var ut = localStorage.getItem("userToken");
        //var ul = JSON.parse(sessionStorage.getItem("user"));
        var uid = this.profile._id;
       /* var profileEdit = new Profile;
        profileEdit.name = this.profile.name;
        profileEdit.username = this.profile.username;
        profileEdit.edad = this.profile.edad;
        profileEdit.pin = this.profile.pin;
        profileEdit.user = ul.user._id;*/
        
        this.profileServices.deleteProfile(uid, ut)
            .subscribe(profile => {
                console.log(this.profiles);
                profile =  profile;
                alert("Delete exitoso");
            });
}

}


