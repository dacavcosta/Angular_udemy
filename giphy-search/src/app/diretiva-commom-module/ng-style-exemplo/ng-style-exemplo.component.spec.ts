import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExemploComponent } from './ng-style-exemplo.component';

describe('NgStyleExemploComponent', () => {
  let component: NgStyleExemploComponent;
  let fixture: ComponentFixture<NgStyleExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
