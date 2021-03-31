import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddsComponent } from './adds/adds.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
