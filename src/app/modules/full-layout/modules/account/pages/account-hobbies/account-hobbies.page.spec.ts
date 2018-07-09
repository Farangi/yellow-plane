import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHobbiesComponent } from './account-hobbies.page';

describe('AccountHobbiesComponent', () => {
  let component: AccountHobbiesComponent;
  let fixture: ComponentFixture<AccountHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
