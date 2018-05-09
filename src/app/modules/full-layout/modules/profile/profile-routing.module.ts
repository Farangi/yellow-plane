import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from '../../../../shared/resolvers/user.resolver';

import { ProfileComponent } from './pages/profile/profile.page';
import { TimelineComponent } from './pages/timeline/timeline.page';
import { AboutComponent } from './pages/about/about.page';

const routes: Routes = [
	{
	    path: '',
	    component: ProfileComponent,
	    resolve: { data: UserResolver},
	    children: [
	    	{
	    		path: '',
	    		component: TimelineComponent,
	    	},
	    	{
	    		path: 'about',
	    		component: AboutComponent,
	    	}
	    ],
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
