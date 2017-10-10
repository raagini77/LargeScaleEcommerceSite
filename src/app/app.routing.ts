import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactusComponent} from './contactus.component';
import{LoginComponent} from './login/login.component';

import {GuestComponent} from './login/guest.component';
import{LogindashComponent}from './login/logindash.component';


import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

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
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
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

