import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHeaderPageComponent } from './account-header-page.component';

describe('AccountHeaderPageComponent', () => {
  let component: AccountHeaderPageComponent;
  let fixture: ComponentFixture<AccountHeaderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHeaderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
