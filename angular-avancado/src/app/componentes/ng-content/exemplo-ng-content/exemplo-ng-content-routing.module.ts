import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploNgContentComponent } from './exemplo-ng-content.component';

const routes: Routes = [
  { path: '', component: ExemploNgContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemploNgContentRoutingModule { }
