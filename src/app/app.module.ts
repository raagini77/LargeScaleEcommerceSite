import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import{routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';

import {ContactusComponent} from './contactus.component';
import {CartComponent} from './cart.component';
import {GuestComponent} from './login/guest.component';
import{LogindashComponent}from './login/logindash.component';
import { FindresComponent } from './findres.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
    ContactusComponent,
    CartComponent,
    GuestComponent,
    LogindashComponent,
    FindresComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
