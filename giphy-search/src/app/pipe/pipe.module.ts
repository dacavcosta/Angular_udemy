import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';
import { TipoPessoaPipe } from '../shared/pipe/tipo-pessoa.pipe';
import { CapitalizePipe } from '../shared/pipe/capitalize.pipe';

@NgModule({
  declarations: [PipeComponent, TipoPessoaPipe, CapitalizePipe],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export default class PipeModule { }
