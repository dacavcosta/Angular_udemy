import { NgModule } from '@angular/core';
import { ShareModuleModule } from 'src/app/share/share.module';
import { FormularioComponent } from './formulario.component';
import { FeatureComponentRountingModule } from './formulario-routing.module';


@NgModule({
  declarations: [ FormularioComponent ],
  imports: [ ShareModuleModule, FeatureComponentRountingModule ],
  exports: [ FormularioComponent ],
})
export class FormularioComponentModule {}
