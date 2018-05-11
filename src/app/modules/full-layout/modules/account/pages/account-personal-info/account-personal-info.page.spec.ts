import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPersonalInfoComponent } from './account-personal-info.page';

describe('AccountPersonalInfoComponent', () => {
  let component: AccountPersonalInfoComponent;
  let fixture: ComponentFixture<AccountPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});