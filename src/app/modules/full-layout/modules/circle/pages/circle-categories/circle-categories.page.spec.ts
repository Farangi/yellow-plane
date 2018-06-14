import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCategoriesComponent } from './circle-categories.page';

describe('CircleCategoriesComponent', () => {
  let component: CircleCategoriesComponent;
  let fixture: ComponentFixture<CircleCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
