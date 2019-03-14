import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgClassExemploRoutingModule } from './ng-class-exemplo-routing.module';
import { NgClassExemploComponent } from './ng-class-exemplo.component';

@NgModule({
  declarations: [NgClassExemploComponent],
  imports: [
    CommonModule,
    NgClassExemploRoutingModule
  ]
})
export class NgClassExemploModule { }
