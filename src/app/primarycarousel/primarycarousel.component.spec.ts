import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarycarouselComponent } from './primarycarousel.component';

describe('PrimarycarouselComponent', () => {
  let component: PrimarycarouselComponent;
  let fixture: ComponentFixture<PrimarycarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarycarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarycarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
