import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormRoutingModule } from './signup-form-routing.module';
import { SignupFormComponent } from './signup-form.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [SignupFormComponent],
  imports: [
    CommonModule,
    SignupFormRoutingModule,
    ShareModule
  ]
})
export class SignupFormModule { }
