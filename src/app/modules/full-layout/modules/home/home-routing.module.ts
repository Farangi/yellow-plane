import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.page';
import { NewsFeedComponent } from './pages/news-feed/news-feed.page';

const routes: Routes = [
	{
	    path: '',
	    component: HomeComponent,
	    children: [
	    	{
	    		path: '',
	    		component: NewsFeedComponent,
	    	}
	    ],
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
