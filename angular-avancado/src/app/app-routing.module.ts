import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './signup-form/signup-form.module#SignupFormModule'
  },
  {
    path: 'exemplo-simples-ng-content',
    loadChildren: './componentes/ng-content/exemplo-simples-ng-content/exemplo-simples-ng-content.module#ExemploSimplesNgContentModule'
  },
  {
    path: 'exemplo-ng-content',
    loadChildren: './componentes/ng-content/exemplo-ng-content/exemplo-ng-content.module#ExemploNgContentModule'
  },
  {
    path: 'view-child-simples',
    loadChildren: './componentes/view-child/view-child-simples/view-child-simples.module#ViewChildSimplesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
