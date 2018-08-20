import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms'; 
//routes
import { app_routing }from "./app.routes";
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PerfilesComponent } from './component/perfiles/perfiles.component';
import { MyPlaylistComponent } from './component/my-playlist/my-playlist.component';
import { ManageProfilesComponent } from './component/manage-profiles/manage-profiles.component';

import {TrimValueAccessorModule} from 'ng-trim-value-accessor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    InicioComponent,
    PerfilesComponent,
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
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
