import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminAuthComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationsModule { }
