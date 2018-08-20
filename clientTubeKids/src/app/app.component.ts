import { Component } from '@angular/core';
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
  constructor(private userServices: UsersService, private router : Router) {
    
  
}
Logout(){
  localStorage.removeItem('userToken');
this.router.navigate(['/login']);
}
}

  

 