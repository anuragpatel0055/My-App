// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { routes } from './app.router';


// import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     AboutComponent,
//     ServicesComponent,
//     HomeComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     routes
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.Component";

import { DataTablesModule } from 'angular-datatables';


//*--------------------------Custom Components-------------------------------*//

 import { AboutComponent } from './about/about.component';
 import { ServicesComponent } from './services/services.component';
 import { HomeComponent } from './home/home.component';
 import { LoginComponent } from './login/login.component';



@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, DataTablesModule,HttpClientModule,

        RouterModule.forRoot([
            {
                path: 'login',
                component: LoginComponent
            },
            {
              path:'about',component:AboutComponent
            },
            {
              path:'services',component:ServicesComponent
            },
            {
              path:'home',component:HomeComponent
            },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ], { useHash: true })
    ],
    declarations: [AppComponent,
        LoginComponent,
        AboutComponent,
        ServicesComponent,
        HomeComponent
        
      
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
