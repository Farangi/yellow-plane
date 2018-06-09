import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DirectivesModule } from '../../../../shared/directives/directives.module';
import { FormsSharedModules } from '../../../../shared/modules/forms';
import { SwiperSharedModules } from '../../../../shared/modules/swiper';
import { AccountRoutingModule } from './account-routing.module';

import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountSidebarComponent } from './components/account-sidebar/account-sidebar.component';
import { AccountHeaderPageComponent } from './components/account-header-page/account-header-page.component';
import { AccountSidebarPageComponent } from './components/account-sidebar-page/account-sidebar-page.component';

import { AccountComponent } from './pages/account/account.page';
import { AccountPersonalInfoComponent } from './pages/account-personal-info/account-personal-info.page';
import { AccountPageComponent } from './pages/account-page/account-page.page';
import { AccountPagePersonalInfoComponent } from './pages/account-page-personal-info/account-page-personal-info.page';
import { AccountPageSettingsComponent } from './pages/account-page-settings/account-page-settings.page';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DirectivesModule,
    FormsSharedModules,
    SwiperSharedModules,
    AccountRoutingModule
  ],
  declarations: [
    AccountHeaderComponent, 
    AccountSidebarComponent, 
    AccountHeaderPageComponent, 
    AccountSidebarPageComponent, 
    AccountComponent, 
    AccountPersonalInfoComponent,
    AccountPageComponent,
    AccountPagePersonalInfoComponent,
    AccountPageSettingsComponent
  ]
})
export class AccountModule { }
