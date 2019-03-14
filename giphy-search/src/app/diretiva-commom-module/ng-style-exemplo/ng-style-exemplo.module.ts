import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgStyleExemploRoutingModule } from './ng-style-exemplo-routing.module';
import { NgStyleExemploComponent } from './ng-style-exemplo.component';

@NgModule({
  declarations: [NgStyleExemploComponent],
  imports: [
    CommonModule,
    NgStyleExemploRoutingModule
  ]
})
export class NgStyleExemploModule { }
