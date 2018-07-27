import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeGuard } from './shared/guards/home.guard';

const routes: Routes = [
	{
	    path: '',
	    redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: './modules/blank-layout/blank-layout.module#BlankLayoutModule',
		canActivate: [HomeGuard]
	},
	{
		path: '',
		loadChildren: './modules/full-layout/full-layout.module#FullLayoutModule',
		canActivate: [AuthGuard]
	},
	{
	    path: '**',
	    redirectTo: 'home'
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
