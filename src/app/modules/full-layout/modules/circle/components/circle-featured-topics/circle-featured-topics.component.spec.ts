import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleFeaturedTopicsComponent } from './circle-featured-topics.component';

describe('CircleFeaturedTopicsComponent', () => {
  let component: CircleFeaturedTopicsComponent;
  let fixture: ComponentFixture<CircleFeaturedTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleFeaturedTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleFeaturedTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
