import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExemploComponent } from './ng-class-exemplo.component';

describe('NgClassExemploComponent', () => {
  let component: NgClassExemploComponent;
  let fixture: ComponentFixture<NgClassExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
