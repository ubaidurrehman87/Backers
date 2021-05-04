import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';


import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';


import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from '../layout/blank/blank.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    AuthRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ]
})
export class AuthModule { }
