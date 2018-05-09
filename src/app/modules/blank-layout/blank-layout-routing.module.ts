import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';

import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';

const routes: Routes = [
	{
		path: '',
		component: BlankLayoutComponent,
		children: [
			{
			    path: 'auth',
			    loadChildren: './modules/auth/auth.module#AuthModule',
			    canActivate: [AuthGuard]
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankLayoutRoutingModule { }
