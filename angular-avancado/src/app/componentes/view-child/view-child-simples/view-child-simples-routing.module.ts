import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildSimplesComponent } from './view-child-simples.component';

const routes: Routes = [
  { path: '', component: ViewChildSimplesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildSimplesRoutingModule { }
