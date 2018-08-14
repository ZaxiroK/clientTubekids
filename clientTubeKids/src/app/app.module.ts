import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//routes
import { app_routing }from "./app.routes";

import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PerfilesComponent } from './component/perfiles/perfiles.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    InicioComponent,
    PerfilesComponent,
    
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpModule
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
