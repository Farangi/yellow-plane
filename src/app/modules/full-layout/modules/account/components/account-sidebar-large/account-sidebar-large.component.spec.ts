import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidebarLargeComponent } from './account-sidebar-large.component';

describe('AccountSidebarLargeComponent', () => {
  let component: AccountSidebarLargeComponent;
  let fixture: ComponentFixture<AccountSidebarLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSidebarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSidebarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
