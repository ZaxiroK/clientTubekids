import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { InicioComponent } from './component/inicio/inicio.component';

import { MyPlaylistComponent } from './component/my-playlist/my-playlist.component';
import { ManageProfilesComponent } from './component/manage-profiles/manage-profiles.component';
import { AuthGuard } from './auth/auth.guard';




const app_routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: InicioComponent},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent},
  {path:'my-playlist', component: MyPlaylistComponent,canActivate:[AuthGuard]},
  {path:'manage-profiles', component: ManageProfilesComponent,canActivate:[AuthGuard]},
  {path:'inicio', component: InicioComponent},
  
];

export const app_routing = RouterModule.forRoot(app_routes);