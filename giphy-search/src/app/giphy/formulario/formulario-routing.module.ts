import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario.component';

const routes: Routes = [
    { path: 'Formulario', component: FormularioComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})
export class FeatureComponentRountingModule {}
