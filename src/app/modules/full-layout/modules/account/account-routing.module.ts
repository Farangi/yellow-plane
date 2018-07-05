import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './pages/account/account.page';
import { AccountPersonalInfoComponent } from './pages/account-personal-info/account-personal-info.page';
import { AccountMessagesComponent } from './pages/account-messages/account-messages.page';

import { AccountPageComponent } from './pages/account-page/account-page.page';
import { AccountPagePersonalInfoComponent } from './pages/account-page-personal-info/account-page-personal-info.page';
import { AccountPageSettingsComponent } from './pages/account-page-settings/account-page-settings.page';
import { AccountPageMessagesComponent } from './pages/account-page-messages/account-page-messages.page';

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
	    		path: 'messages',
	    		component: AccountMessagesComponent,
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
	    		path: 'messages',
	    		component: AccountPageMessagesComponent,
	    	}
	    ],
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
