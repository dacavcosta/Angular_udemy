import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertaComponent } from './alerta.component';
import { ViewChildSimplesRoutingModule } from './view-child-simples-routing.module';
import { ViewChildSimplesComponent } from './view-child-simples.component';

@NgModule({
  declarations: [
    AlertaComponent,
    ViewChildSimplesComponent
  ],
  imports: [
    CommonModule,
    ViewChildSimplesRoutingModule
  ]
})
export class ViewChildSimplesModule { }
