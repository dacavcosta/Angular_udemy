import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectoRoutingModule } from './prospecto-routing.module';
import { ProspectoComponent } from './prospecto.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
  declarations: [ProspectoComponent, PessoaComponent, EnderecoComponent],
  imports: [
    CommonModule,
    ProspectoRoutingModule
  ]
})
export class ProspectoModule { }
