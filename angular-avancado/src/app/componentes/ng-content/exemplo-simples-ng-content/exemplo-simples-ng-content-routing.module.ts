import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploSimplesNgContentComponent } from './exemplo-simples-ng-content.component';

const routes: Routes = [
  { path: '', component: ExemploSimplesNgContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemploSimplesNgContentRoutingModule { }
