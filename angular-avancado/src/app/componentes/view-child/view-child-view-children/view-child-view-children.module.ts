import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildViewChildrenRoutingModule } from './view-child-view-children-routing.module';
import { ViewChildViewChildrenComponent } from './view-child-view-children.component';
import { AlertaComponent } from './alerta.component';

@NgModule({
  declarations: [ViewChildViewChildrenComponent, AlertaComponent],
  imports: [
    CommonModule,
    ViewChildViewChildrenRoutingModule
  ]
})
export class ViewChildViewChildrenModule { }
