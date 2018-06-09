import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageSettingsComponent } from './account-page-settings.page';

describe('AccountPageSettingsComponent', () => {
  let component: AccountPageSettingsComponent;
  let fixture: ComponentFixture<AccountPageSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPageSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
