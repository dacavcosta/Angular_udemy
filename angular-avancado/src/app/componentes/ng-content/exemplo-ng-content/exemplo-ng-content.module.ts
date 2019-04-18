import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExemploNgContentRoutingModule } from './exemplo-ng-content-routing.module';
import { ExemploNgContentComponent } from './exemplo-ng-content.component';
import { ChildSelectComponent } from './child-select.component';

@NgModule({
  declarations: [ExemploNgContentComponent, ChildSelectComponent],
  imports: [
    CommonModule,
    ExemploNgContentRoutingModule
  ]
})
export class ExemploNgContentModule { }
