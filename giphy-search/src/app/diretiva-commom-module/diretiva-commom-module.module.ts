import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaCommomModuleRoutingModule } from './diretiva-commom-module-routing.module';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';

@NgModule({
  declarations: [DiretivaCommomModuleComponent],
  imports: [
    CommonModule,
    DiretivaCommomModuleRoutingModule
  ]
})
export default class DiretivaCommomModuleModule { }
