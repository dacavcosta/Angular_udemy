import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaCommomModuleRoutingModule } from './diretiva-commom-module-routing.module';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';
import { NgClassExemploComponent } from './ng-class-exemplo/ng-class-exemplo.component';
import { NgStyleExemploComponent } from './ng-style-exemplo/ng-style-exemplo.component';
import { NgSwitchExemploComponent } from './ng-switch-exemplo/ng-switch-exemplo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DiretivaCommomModuleComponent,
    NgClassExemploComponent,
    NgStyleExemploComponent,
    NgSwitchExemploComponent
  ],
  imports: [
    CommonModule,
    DiretivaCommomModuleRoutingModule,
    RouterModule
  ]
})
export default class DiretivaCommomModuleModule { }
