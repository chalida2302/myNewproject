import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsComponent } from './adds/adds.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '',component: HomeComponent},
  { path : 'add', component : AddsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
