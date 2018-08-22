import { Component,OnInit } from '@angular/core';
import { UsersService} from './services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'clientTubeKids';
  userClaims :any;


  constructor(private userServices: UsersService, private router : Router) {
    
  
}

ngOnInit() {
  /*this.userServices.getUserClaims().subscribe((data:any)=>{
    this.userClaims = data;
  })*/
}

Logout(){
  localStorage.removeItem('userToken');
  sessionStorage.removeItem('user');
this.router.navigate(['/login']);
}
}

  

 