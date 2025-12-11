import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Firstgrading } from './firstgrading/firstgrading';
import { Midterms } from './midterms/midterms';
import { Finals } from './finals/finals';




export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'Home', component: Home, title: 'Home' },
  { path: 'firstgrading', component: Firstgrading},
  { path: 'midterms', component: Midterms},
  { path: 'finals', component: Finals }
  
];
