import { NgModule } from '@angular/core';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { SharedModuleModule } from '../../shared/shared.module';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';
import { GiphySearchManualRoutingModule } from './giphy-search-manual-routing.module';

@NgModule({
    declarations: [ GiphySearchManualComponent ],
    imports: [ SharedModuleModule, GiphySearchListModule, GiphySearchManualRoutingModule ],
    exports: [ GiphySearchManualComponent ],
    providers: [ GiphySearchService ],
})
export default class GiphySearchManualModule {}
