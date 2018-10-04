import { NgModule } from '@angular/core';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [ GiphySearchManualComponent ],
    imports: [ CommonModule ],
    exports: [ GiphySearchManualComponent ],
    providers: [ GiphySearchService ],
})
export class GiphySearchManualComponentModule {}
