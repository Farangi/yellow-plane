import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEducationComponent } from './account-education.page';

describe('AccountEducationComponent', () => {
  let component: AccountEducationComponent;
  let fixture: ComponentFixture<AccountEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
