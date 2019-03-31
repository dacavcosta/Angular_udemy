import { NgModule } from '@angular/core';
import { SharedModuleModule } from 'src/app/shared/shared.module';
import { FormularioComponent } from './formulario.component';
import { FeatureComponentRountingModule } from './formulario-routing.module';


@NgModule({
  declarations: [ FormularioComponent ],
  imports: [ SharedModuleModule, FeatureComponentRountingModule ],
  exports: [ FormularioComponent ],
})
export class FormularioComponentModule {}
