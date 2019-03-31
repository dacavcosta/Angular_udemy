import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphySearchAutoComponent } from './giphy-search-auto.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { By } from 'protractor';
// import { RouterLinkDirectiveStubDirective } from './router-link-directive-stub';

describe('GiphySearchAutoComponent', () => {
  let component: GiphySearchAutoComponent;
  let fixture: ComponentFixture<GiphySearchAutoComponent>;
  // let linkDes: any;
  // let routerLinks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearchAutoComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(GiphySearchAutoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      // linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStubDirective));
      // routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStubDirective));
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
