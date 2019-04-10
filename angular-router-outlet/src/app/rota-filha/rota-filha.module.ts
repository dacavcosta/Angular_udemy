import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RotaFilhaRoutingModule } from './rota-filha-routing.module';
import { RotaFilhaComponent } from './rota-filha.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';
import { ChildTwoNestedComponent } from './child-two-nested.component';
import { ComponentOneComponent } from './component-one.component';
import { ComponentTwoComponent } from './component-two.component';


@NgModule({
  declarations: [
    RotaFilhaComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildTwoNestedComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    CommonModule,
    RotaFilhaRoutingModule,
    RouterModule
  ]
})
export class RotaFilhaModule { }
