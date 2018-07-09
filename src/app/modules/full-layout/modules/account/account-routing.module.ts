import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './pages/account/account.page';
import { AccountPersonalInfoComponent } from './pages/account-personal-info/account-personal-info.page';
import { AccountMessagesComponent } from './pages/account-messages/account-messages.page';
import { AccountNotificationsComponent } from './pages/account-notifications/account-notifications.page';
import { AccountFriendRequestsComponent } from './pages/account-friend-requests/account-friend-requests.page';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.page';
import { AccountChangePasswordComponent } from './pages/account-change-password/account-change-password.page';
import { AccountHobbiesComponent } from './pages/account-hobbies/account-hobbies.page';
import { AccountEducationComponent } from './pages/account-education/account-education.page';

import { AccountPageComponent } from './pages/account-page/account-page.page';
import { AccountPagePersonalInfoComponent } from './pages/account-page-personal-info/account-page-personal-info.page';
import { AccountPageSettingsComponent } from './pages/account-page-settings/account-page-settings.page';
import { AccountPageMessagesComponent } from './pages/account-page-messages/account-page-messages.page';
import { AccountPageChangePasswordComponent } from './pages/account-page-change-password/account-page-change-password.page';
import { AccountPageNotificationsComponent } from './pages/account-page-notifications/account-page-notifications.page';
import { AccountPageAdManagerComponent } from './pages/account-page-ad-manager/account-page-ad-manager.page';

const routes: Routes = [
	{
	    path: 'profile',
	    component: AccountComponent,
	    children: [
	    	{
	    		path: '',
	    		component: AccountPersonalInfoComponent,
			},
			{
	    		path: 'settings',
	    		component: AccountSettingsComponent,
			},
			{
	    		path: 'passwordchange',
	    		component: AccountChangePasswordComponent,
			},
			{
	    		path: 'hobbies',
	    		component: AccountHobbiesComponent,
			},
			{
	    		path: 'education',
	    		component: AccountEducationComponent,
			},
			{
	    		path: 'messages',
	    		component: AccountMessagesComponent,
			},
			{
	    		path: 'notifications',
	    		component: AccountNotificationsComponent,
			},
			{
	    		path: 'requests',
	    		component: AccountFriendRequestsComponent,
	    	}
	    ],
	},
	{
	    path: 'page',
	    component: AccountPageComponent,
	    children: [
	    	{
	    		path: '',
	    		component: AccountPagePersonalInfoComponent,
			},
			{
	    		path: 'settings',
	    		component: AccountPageSettingsComponent,
			},
			{
	    		path: 'passwordchange',
	    		component: AccountPageChangePasswordComponent,
			},
			{
	    		path: 'messages',
	    		component: AccountPageMessagesComponent,
			},
			{
	    		path: 'notifications',
	    		component: AccountPageNotificationsComponent,
			},
			{
	    		path: 'ad-manager',
	    		component: AccountPageAdManagerComponent,
	    	}
	    ],
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
