import { NgModule } from '@angular/core';
import { SharedModuleModule } from '../shared/shared.module';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponentService } from './contato.component.service';

@NgModule({
  declarations: [ ContatoComponent ],
  imports: [ SharedModuleModule, ContatoRoutingModule ],
  providers: [ContatoComponentService]
})
export class ContatoModule { }
