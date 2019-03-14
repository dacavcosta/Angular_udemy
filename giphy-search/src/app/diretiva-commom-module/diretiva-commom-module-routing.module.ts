import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';

const routes: Routes = [
  { path: '', component: DiretivaCommomModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretivaCommomModuleRoutingModule { }
