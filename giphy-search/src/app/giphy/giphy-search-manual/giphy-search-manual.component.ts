import { Component, OnInit } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';
import { Response } from '@angular/http';

@Component({
    selector: 'giphy-search-manual',
    templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

    gifs: any[] = [];

    constructor(private giphySearchService: GiphySearchService) {}

    ngOnInit() {}

    pesquisarGiphy() {
        this.giphySearchService.pesquisarGiphy('10', 'deux')
            .subscribe((response: Response) => this.gifs = response.json().data);
    }
}
