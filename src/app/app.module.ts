import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material';
import 'hammerjs';
import{routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';

import {ContactusComponent} from './contactus.component';
import {CartComponent} from './components/cart/cart.component';
import {GuestComponent} from './login/guest.component';
import{LogindashComponent}from './login/logindash.component';



//importing reactive library into the application
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//Importing the components into the module to make it avaible all over the application 

import { COMPONENTS } from './components';
import { SERVICES } from './services';
import { ACTIONS } from './store/actions';
import { reducers, metaReducers } from './store/reducers';
import { AllEffects } from './store/effects';

// Importing the pipe 
import{KeysPipe} from './productfilter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
    ContactusComponent,
    CartComponent,
    GuestComponent,
    LogindashComponent,
   
     COMPONENTS,
    KeysPipe
  ],
  imports: [
    BrowserModule,
     FormsModule,
    HttpModule,
    routing,
      MatCardModule,

      //To register the reducers at the application level. for registering the reducers to the feature modules which are lazy loaded use for feature module 
    StoreModule.forRoot(reducers, 
      // { metaReducers }
    ),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    AllEffects,
  ],
  providers: [ SERVICES, ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }
