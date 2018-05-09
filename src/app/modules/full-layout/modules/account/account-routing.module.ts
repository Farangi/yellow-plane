import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './pages/account/account.page';
import { AccountPersonalInfoComponent } from './pages/account-personal-info/account-personal-info.page';

const routes: Routes = [
	{
	    path: '',
	    component: AccountComponent,
	    children: [
	    	{
	    		path: '',
	    		component: AccountPersonalInfoComponent,
	    	}
	    ],
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
