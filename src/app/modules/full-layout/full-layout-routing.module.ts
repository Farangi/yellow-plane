import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { UserResolver } from '../../shared/resolvers/user.resolver';
import { ProfileGuard } from '../../shared/guards/profile.gaurd';
import { PageGuard } from '../../shared/guards/page.gaurd';

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
				loadChildren: './modules/profile/profile.module#ProfileModule',
				canActivate: [ProfileGuard]
			},
			{
			    path: 'page',
				loadChildren: './modules/page/page.module#PageModule',
				canActivate: [PageGuard]
			},
			{
			    path: 'account',
			    loadChildren: './modules/account/account.module#AccountModule'
			},
			{
			    path: 'circles',
			    loadChildren: './modules/circle/circle.module#CircleModule'
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
