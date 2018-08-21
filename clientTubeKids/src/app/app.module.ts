import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms'; 
//routes
import { app_routing }from "./app.routes";
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { VideosService } from './services/videos.service';
import { ProfilesService } from './services/profiles.service';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { MyPlaylistComponent } from './component/my-playlist/my-playlist.component';
import { ManageProfilesComponent } from './component/manage-profiles/manage-profiles.component';

import {TrimValueAccessorModule} from 'ng-trim-value-accessor';
//import { AuthGuard } from './auth/auth.guard';
//import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    InicioComponent,
    MyPlaylistComponent,
    ManageProfilesComponent,
    
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpModule,
    TrimValueAccessorModule,
    RouterModule,
    
    
  ],
  providers: [UsersService,VideosService,ProfilesService,/*AuthGuard,
  ,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
