import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowAstavinayakComponent } from './know-astavinayak.component';

describe('KnowAstavinayakComponent', () => {
  let component: KnowAstavinayakComponent;
  let fixture: ComponentFixture<KnowAstavinayakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowAstavinayakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowAstavinayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
