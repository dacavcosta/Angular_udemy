
import { GiphySearchListComponent } from './giphy-search-list.component';
import { NgModule } from '@angular/core';
import { ShareModuleModule } from '../../share/share.module';

@NgModule({
  imports: [ ShareModuleModule ],
  declarations: [ GiphySearchListComponent ],
  exports: [ GiphySearchListComponent ]
})
export class GiphySearchListModule { }
