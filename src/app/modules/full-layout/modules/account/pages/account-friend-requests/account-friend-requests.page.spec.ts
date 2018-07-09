import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFriendRequestsComponent } from './account-friend-requests.page';

describe('AccountFriendRequestsComponent', () => {
  let component: AccountFriendRequestsComponent;
  let fixture: ComponentFixture<AccountFriendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFriendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
