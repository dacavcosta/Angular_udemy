import { NgModule } from '@angular/core';

import { ExemploSimplesNgContentRoutingModule } from './exemplo-simples-ng-content-routing.module';
import { ExemploSimplesNgContentComponent } from './exemplo-simples-ng-content.component';
import { ShareModule } from 'src/app/share/share.module';
import { ComponentePesquisaComponent } from './componente-pesquisa.component';
import { BotaoPesquisaComponent } from './botao-pesquisa.component';

@NgModule({
  declarations: [ExemploSimplesNgContentComponent, ComponentePesquisaComponent, BotaoPesquisaComponent],
  imports: [
    ExemploSimplesNgContentRoutingModule,
    ShareModule
  ]
})
export class ExemploSimplesNgContentModule { }
