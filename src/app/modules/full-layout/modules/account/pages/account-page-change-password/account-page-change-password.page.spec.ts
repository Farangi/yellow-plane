import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageChangePasswordComponent } from './account-page-change-password.page';

describe('AccountPageChangePasswordComponent', () => {
  let component: AccountPageChangePasswordComponent;
  let fixture: ComponentFixture<AccountPageChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPageChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
