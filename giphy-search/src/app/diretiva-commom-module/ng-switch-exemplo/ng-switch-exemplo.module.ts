import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSwitchExemploRoutingModule } from './ng-switch-exemplo-routing.module';
import { NgSwitchExemploComponent } from './ng-switch-exemplo.component';

@NgModule({
  declarations: [NgSwitchExemploComponent],
  imports: [
    CommonModule,
    NgSwitchExemploRoutingModule
  ]
})
export class NgSwitchExemploModule { }
