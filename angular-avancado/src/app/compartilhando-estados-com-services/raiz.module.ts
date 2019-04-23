import { NgModule } from '@angular/core';

import { RaizRoutingModule } from './raiz-routing.module';
import { RaizComponent } from './raiz.component';
import { RaizService } from './raiz.service';
import { ShareModule } from '../share/share.module';
import { Nvl1Module } from './nvl1/nvl1.module';

@NgModule({
  declarations: [RaizComponent],
  imports: [
    ShareModule,
    RaizRoutingModule,
    Nvl1Module
  ],
  providers: [RaizService]
})
export class RaizModule { }

/*
    Este exemplo foi feito apenas para observar o comportamento do valor do conteúdo do service com
  relação aos componentes e com a detecção de mudanças destes componentes. Não é recomendado o uso
  de serviços para compartilhar informações com componentes desta forma. Existem outra forma de
  utilizar services com componentes, mas utilizando observables, que é o mais recomendado.
*/
