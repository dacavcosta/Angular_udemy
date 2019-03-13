import { Component, OnInit } from '@angular/core';
import { GiphySearchManualComponent } from '../giphy-search-manual/giphy-search-manual.component';
import { GiphySearchService } from '../giphy-search.service';
import { Title } from '@angular/platform-browser';
import { Giphy } from '../giphy.type';


@Component({
    selector: 'app-giphy-search-auto',
    templateUrl: './giphy-search-auto.component.html'
})
export class GiphySearchAutoComponent extends GiphySearchManualComponent implements OnInit {
    gifs: Giphy[] = [];
    limit: string;
    term: string;

    constructor(protected title: Title, protected giphySearchService: GiphySearchService) {
        super(title, giphySearchService);
    }

    ngOnInit() {
        this.title.setTitle(this.title.getTitle());
    }
}
