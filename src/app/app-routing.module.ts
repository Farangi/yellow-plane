import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
	{
	    path: '',
	    redirectTo: 'auth',
	    pathMatch: 'full',
	    canActivate: [AuthGuard]
	},
	{
		path: '',
		loadChildren: './modules/blank-layout/blank-layout.module#BlankLayoutModule',
		canActivate: [AuthGuard]
	},
	{
		path: '',
		loadChildren: './modules/full-layout/full-layout.module#FullLayoutModule'
	},
	{
	    path: '**',
	    redirectTo: 'auth'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
