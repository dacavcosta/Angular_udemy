import { Injectable } from '@angular/core';

@Injectable()
export class GiphySearchService {

    constructor() {}

    pesquisarGiphy(limit: string, term: string): void {
        console.log('Pesquisar giphy foi chamado');
    }
}