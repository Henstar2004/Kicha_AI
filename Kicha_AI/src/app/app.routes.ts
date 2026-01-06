import { Routes } from '@angular/router';
import { Uicomponent } from './uicomponent/uicomponent';
import { Kichahome } from './kichahome/kichahome';
import { Kichacontainer } from './kichacontainer/kichacontainer';
import { Kichasettings } from './kichasettings/kichasettings';
import { Kichacontact } from './kichacontact/kichacontact';
import { Kichaai } from './kichaai/kichaai';
import { Login } from './login/login';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  // { path: 'home', component: Kichaai } ,
  { path: 'home', component: Kichahome } ,
  { path: 'login', component: Login } ,
  { path: 'container', component: Kichacontainer } ,
  { path: 'settings', component: Kichasettings } ,
  { path: 'contact', component: Kichacontact } 

];
