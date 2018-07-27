import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserResolver } from '../../../../shared/resolvers/user.resolver';

import { ProfileComponent } from './pages/profile/profile.page';
import { TimelineComponent } from './pages/timeline/timeline.page';
import { AboutComponent } from './pages/about/about.page';
import { FriendsComponent } from './pages/friends/friends.page';
import { PhotosComponent } from './pages/photos/photos.page';
import { VideosComponent } from './pages/videos/videos.page';
import { ProfileResolver } from '../../../../shared/resolvers/profile.resolver';
import { ViewProfileGuard } from '../../../../shared/guards/viewProfile.guard';

const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: { data: ProfileResolver },
    children: [
      {
        path: '',
        component: TimelineComponent,
        canActivate: [ViewProfileGuard]
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'friends',
        component: FriendsComponent,
        canActivate: [ViewProfileGuard]
      },
      {
        path: 'photos',
        component: PhotosComponent,
        canActivate: [ViewProfileGuard]
      },
      {
        path: 'videos',
        component: VideosComponent,
        canActivate: [ViewProfileGuard]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
