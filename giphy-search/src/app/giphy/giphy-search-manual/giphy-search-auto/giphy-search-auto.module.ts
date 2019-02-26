import { NgModule } from '@angular/core';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';
import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';
import { GiphySearchService } from '../../giphy-search.service';
import { ShareModuleModule } from 'src/app/share/share.module';
import { GiphySearchListModule } from '../../giphy-search-list/giphy-search-list.module';

@NgModule({
  declarations: [ GiphySearchAutoComponent ],
  imports: [
    ShareModuleModule,
    GiphySearchListModule,
    GiphySearchAutoRoutingModule
  ],
  providers: [ GiphySearchService ],
})
export class GiphySearchAutoModule { }
