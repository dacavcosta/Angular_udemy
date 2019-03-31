
import { GiphySearchListComponent } from './giphy-search-list.component';
import { NgModule } from '@angular/core';
import { SharedModuleModule } from '../../shared/shared.module';

@NgModule({
  imports: [ SharedModuleModule ],
  declarations: [ GiphySearchListComponent ],
  exports: [ GiphySearchListComponent ]
})
export class GiphySearchListModule { }
