import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRecentTopicsComponent } from './circle-recent-topics.component';

describe('CircleRecentTopicsComponent', () => {
  let component: CircleRecentTopicsComponent;
  let fixture: ComponentFixture<CircleRecentTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleRecentTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRecentTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
