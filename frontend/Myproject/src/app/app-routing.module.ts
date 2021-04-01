import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsComponent } from './adds/adds.component';
import { AddtypnameComponent } from './addtypname/addtypname.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path : 'home',component: HomeComponent},
  { path : 'add', component : AddsComponent},
  { path : 'addtype',component : AddtypnameComponent},
  { path : 'view' ,component : ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
