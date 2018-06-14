import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleOpenCircleComponent } from './circle-open-circle.page';

describe('CircleOpenCircleComponent', () => {
  let component: CircleOpenCircleComponent;
  let fixture: ComponentFixture<CircleOpenCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleOpenCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleOpenCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
