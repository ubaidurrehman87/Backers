
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from '../layout/blank/blank.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : '',
    component : BlankComponent,
    children : [
      {
        path : 'register',
        component : RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
