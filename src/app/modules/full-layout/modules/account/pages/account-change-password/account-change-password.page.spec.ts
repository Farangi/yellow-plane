import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangePasswordComponent } from './account-change-password.page';

describe('AccountChangePasswordComponent', () => {
  let component: AccountChangePasswordComponent;
  let fixture: ComponentFixture<AccountChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
