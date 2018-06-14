import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCreateTopicComponent } from './circle-create-topic.page';

describe('CircleCreateTopicComponent', () => {
  let component: CircleCreateTopicComponent;
  let fixture: ComponentFixture<CircleCreateTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCreateTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCreateTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
