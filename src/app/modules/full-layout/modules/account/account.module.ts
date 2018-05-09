import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DirectivesModule } from '../../../../shared/directives/directives.module';
import { FormsSharedModules } from '../../../../shared/modules/forms';
import { AccountRoutingModule } from './account-routing.module';

import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountComponent } from './pages/account/account.page';
import { AccountPersonalInfoComponent } from './pages/account-personal-info/account-personal-info.page';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DirectivesModule,
    FormsSharedModules,
    AccountRoutingModule
  ],
  declarations: [AccountHeaderComponent, AccountComponent, AccountPersonalInfoComponent]
})
export class AccountModule { }
