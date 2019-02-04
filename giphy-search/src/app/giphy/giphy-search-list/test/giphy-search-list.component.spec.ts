import { GiphySearchListComponent } from '../giphy-search-list.component';
import { ShareModuleModule } from '../../../share/share.module';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('', () => {
    let fixture: ComponentFixture<GiphySearchListComponent>;
    let giphyComponent: GiphySearchListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ ShareModuleModule ],
            declarations: [ GiphySearchListComponent ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(GiphySearchListComponent);
            giphyComponent = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it('Deveria ter criado o GiphySearchListComponent', () => {
        expect(giphyComponent).toBeTruthy();
        expect(giphyComponent).not.toBeNull();
    });

    it('Devria ter 2 tag 2 no html renderizado', () => {
        giphyComponent.gifsList = [
            {
                id: '1',
                url: 'localhost',
                images: {
                    fixed_height: {url: 'localhost/01.gif'}
                }
            },
            {
                id: '2',
                url: 'localhost:8080',
                images: {
                    fixed_height: {url: 'localhost/02.gif'}
                }
            }
        ];

        fixture.detectChanges();
        fixture.whenStable().then( () => {
            const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
            expect(debugElements.length).toBe(2);
        });
    });
});
