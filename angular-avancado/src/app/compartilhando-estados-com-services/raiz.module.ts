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
