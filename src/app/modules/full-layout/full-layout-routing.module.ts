import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { UserResolver } from '../../shared/resolvers/user.resolver';

const routes: Routes = [
	{
		path: '',
		component: FullLayoutComponent,
		resolve: { data: UserResolver},
		children: [
			{
			    path: 'home',
			    loadChildren: './modules/home/home.module#HomeModule'
			},
			{
			    path: 'profile',
			    loadChildren: './modules/profile/profile.module#ProfileModule'
			},
			{
			    path: 'account',
			    loadChildren: './modules/account/account.module#AccountModule'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
