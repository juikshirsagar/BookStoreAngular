import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ListBookComponent } from './components/list-book/list-book.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path:'add' ,component:AddBookComponent
  },
  {
    path:'edit/:id',component:EditBookComponent
  },
  {
    path:'list',component:ListBookComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
