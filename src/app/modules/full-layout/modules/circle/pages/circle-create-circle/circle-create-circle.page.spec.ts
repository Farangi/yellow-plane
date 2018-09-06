import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCreateCircleComponent } from './circle-create-circle.page';

describe('CircleCreateTopicComponent', () => {
  let component: CircleCreateCircleComponent;
  let fixture: ComponentFixture<CircleCreateCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCreateCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCreateCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
