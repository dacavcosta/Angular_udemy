import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchExemploComponent } from './ng-switch-exemplo.component';

describe('NgSwitchExemploComponent', () => {
  let component: NgSwitchExemploComponent;
  let fixture: ComponentFixture<NgSwitchExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
