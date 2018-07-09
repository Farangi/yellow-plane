import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageNotificationsComponent } from './account-page-notifications.page';

describe('AccountPageNotificationsComponent', () => {
  let component: AccountPageNotificationsComponent;
  let fixture: ComponentFixture<AccountPageNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPageNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
