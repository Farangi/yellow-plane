import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from '../../../../shared/resolvers/user.resolver';

import { PageComponent } from './pages/page/page.page';
import { TimelineComponent } from './pages/timeline/timeline.page';
import { AboutComponent } from './pages/about/about.page';
import { PhotosComponent } from './pages/photos/photos.page';
import { VideosComponent } from './pages/videos/videos.page';
import { EventsComponent } from './pages/events/events.page';
import { StatisticsComponent } from './pages/statistics/statistics.page';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    resolve: { data: UserResolver },
    children: [
      {
        path: '',
        component: TimelineComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'photos',
        component: PhotosComponent,
      },
      {
        path: 'videos',
        component: VideosComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
