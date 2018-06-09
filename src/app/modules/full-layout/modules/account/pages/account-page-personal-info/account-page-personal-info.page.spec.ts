import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPagePersonalInfoComponent } from './account-page-personal-info.page';

describe('AccountPagePersonalInfoComponent', () => {
  let component: AccountPagePersonalInfoComponent;
  let fixture: ComponentFixture<AccountPagePersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPagePersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPagePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
