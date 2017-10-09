import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactusComponent} from './contactus.component';
import{LoginComponent} from './login/login.component';

import {CartComponent} from './cart.component';
import {GuestComponent} from './login/guest.component';
import{LogindashComponent}from './login/logindash.component';
import {FindresComponent} from './findres.component';
export const routes:Routes = [
     {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent,
      
    },
     {
        path:'findres',
        component: FindresComponent,
      
    },
     {
          path:'cart',
        component:CartComponent, 

    },
    {
          path:'contactus',
        component: ContactusComponent,

    },
   
    {
        path:'login',
        component: LoginComponent,
children:[ 
           {
        path:'',
        component:LogindashComponent
       },

            {
                path:'signUp',
                component:GuestComponent,
            },
            // { 
            //     path:'driver',
            //     component:DriverComponent,
            // },
            // {
            //     path:'vendor',
            //     component:VendorComponent,
            // },
              
            

           
        ]
      
    }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);