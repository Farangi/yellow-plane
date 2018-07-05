import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageMessagesComponent } from './account-page-messages.page';

describe('AccountPageMessagesComponent', () => {
  let component: AccountPageMessagesComponent;
  let fixture: ComponentFixture<AccountPageMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPageMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
