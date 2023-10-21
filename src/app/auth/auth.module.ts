import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthRoutingRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
