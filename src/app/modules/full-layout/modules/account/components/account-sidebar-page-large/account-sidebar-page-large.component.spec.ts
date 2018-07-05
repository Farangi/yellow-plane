import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidebarPageLargeComponent } from './account-sidebar-page-large.component';

describe('AccountSidebarPageLargeComponent', () => {
  let component: AccountSidebarPageLargeComponent;
  let fixture: ComponentFixture<AccountSidebarPageLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSidebarPageLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSidebarPageLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
