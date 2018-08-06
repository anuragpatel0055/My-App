import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";


import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {LoginComponent} from "./login/login.component";

export const router :Routes=[

{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'about',component:AboutComponent},
{path:'services',component:ServicesComponent}

]

export const routes:ModuleWithProviders=RouterModule.forRoot(router);



