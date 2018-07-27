import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../../../shared/guards/auth.guard';

import { LandingComponent } from './pages/landing/landing.page';

const routes: Routes = [
	{
	    path: '',
	    component: LandingComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
