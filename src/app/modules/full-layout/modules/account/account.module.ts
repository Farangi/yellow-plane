import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DirectivesModule } from '../../../../shared/directives/directives.module';
import { FormsSharedModules } from '../../../../shared/modules/forms';
import { SwiperSharedModules } from '../../../../shared/modules/swiper';
import { ScrollbarModule } from '../../../../shared/modules/scrollbar';
import { EmojiModules } from '../../../../shared/modules/emoji';
import { AccountRoutingModule } from './account-routing.module';

import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountSidebarComponent } from './components/account-sidebar/account-sidebar.component';
import { AccountSidebarLargeComponent } from './components/account-sidebar-large/account-sidebar-large.component';
import { AccountComponent } from './pages/account/account.page';
import { AccountPersonalInfoComponent } from './pages/account-personal-info/account-personal-info.page';
import { AccountMessagesComponent } from './pages/account-messages/account-messages.page';

import { AccountHeaderPageComponent } from './components/account-header-page/account-header-page.component';
import { AccountSidebarPageComponent } from './components/account-sidebar-page/account-sidebar-page.component';
import { AccountSidebarPageLargeComponent } from './components/account-sidebar-page-large/account-sidebar-page-large.component';
import { AccountPageComponent } from './pages/account-page/account-page.page';
import { AccountPagePersonalInfoComponent } from './pages/account-page-personal-info/account-page-personal-info.page';
import { AccountPageSettingsComponent } from './pages/account-page-settings/account-page-settings.page';
import { AccountPageMessagesComponent } from './pages/account-page-messages/account-page-messages.page';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DirectivesModule,
    FormsSharedModules,
    SwiperSharedModules,
    ScrollbarModule,
    EmojiModules,
    AccountRoutingModule
  ],
  declarations: [
    AccountHeaderComponent, 
    AccountSidebarComponent,
    AccountSidebarLargeComponent,
    AccountComponent, 
    AccountPersonalInfoComponent,
    AccountMessagesComponent,
    AccountHeaderPageComponent, 
    AccountSidebarPageComponent,
    AccountSidebarPageLargeComponent,
    AccountPageMessagesComponent,
    AccountPageComponent,
    AccountPagePersonalInfoComponent,
    AccountPageSettingsComponent

  ]
})
export class AccountModule { }
