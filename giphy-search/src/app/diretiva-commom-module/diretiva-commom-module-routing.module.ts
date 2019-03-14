import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';
import { NgClassExemploComponent } from './ng-class-exemplo/ng-class-exemplo.component';
import { NgStyleExemploComponent } from './ng-style-exemplo/ng-style-exemplo.component';
import { NgSwitchExemploComponent } from './ng-switch-exemplo/ng-switch-exemplo.component';

const routes: Routes = [
  { path: '', component: DiretivaCommomModuleComponent },
  { path: 'ngclass', component: NgClassExemploComponent },
  { path: 'ngstyle', component: NgStyleExemploComponent },
  { path: 'ngswitch', component: NgSwitchExemploComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretivaCommomModuleRoutingModule { }
