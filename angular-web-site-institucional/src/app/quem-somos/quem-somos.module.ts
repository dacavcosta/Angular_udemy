import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from './quem-somos.component';
import { QuemSomosRoutingModule } from './quem-somos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    QuemSomosRoutingModule
  ],
  declarations: [
    QuemSomosComponent
  ]
})

export class QuemSomosModule { 

}
