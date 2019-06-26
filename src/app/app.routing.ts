import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const AppRouterModule = RouterModule.forRoot([
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
]);