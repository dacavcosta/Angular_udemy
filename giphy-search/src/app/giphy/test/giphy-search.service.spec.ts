import { GiphySearchService } from '../giphy-search.service';

describe('giphy-search.service.spec.ts', () => {
    const httpMock = jasmine.createSpyObj('Http', [ 'get' ]);
    let service: GiphySearchService;
    beforeEach(() => {
        service = new GiphySearchService(httpMock);
    });

    it('pesquisarGiphy', () => {
        service.pesquisarGiphy('10', 'happy');

        expect(httpMock.get).toHaveBeenCalled();
        expect(httpMock.get)
        .toHaveBeenCalledWith('http://api.giphy.com/v1/gifs/search?q=happy&api_key=YLXQLDZMCqm5yCypoRfvnUqO6qD9XN78&limit=10');
    });

    it('getUrl', () => {
        const url = service.getUrl('10', 'happy');

        expect(url)
        .toBe('http://api.giphy.com/v1/gifs/search?q=happy&api_key=YLXQLDZMCqm5yCypoRfvnUqO6qD9XN78&limit=10');
    });
});
