import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleOpenTopicComponent } from './circle-open-topic.page';

describe('CircleOpenTopicComponent', () => {
  let component: CircleOpenTopicComponent;
  let fixture: ComponentFixture<CircleOpenTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleOpenTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleOpenTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
