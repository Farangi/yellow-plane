import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageAdManagerComponent } from './account-page-ad-manager.page';

describe('AccountPageAdManagerComponent', () => {
  let component: AccountPageAdManagerComponent;
  let fixture: ComponentFixture<AccountPageAdManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPageAdManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageAdManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
