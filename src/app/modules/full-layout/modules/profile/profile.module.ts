import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { FormsSharedModules } from '../../../../shared/modules/forms';
import { SelectSharedModules } from '../../../../shared/modules/select';
import { FilePickerModules } from '../../../../shared/modules/file-picker';
import { SwiperSharedModules } from '../../../../shared/modules/swiper';
import { PhotoPostViewerSharedModules } from '../../../../shared/modules/photo-post-viewer';
import { DirectivesModule } from '../../../../shared/directives/directives.module';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileComponent } from './pages/profile/profile.page';
import { TimelineComponent } from './pages/timeline/timeline.page';
import { AboutComponent } from './pages/about/about.page';
import { FriendsComponent } from './pages/friends/friends.page';
import { PhotosComponent } from './pages/photos/photos.page';
import { VideosComponent } from './pages/videos/videos.page';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ScrollToModule,
    FormsSharedModules,
    SelectSharedModules,
    FilePickerModules,
    SwiperSharedModules,
    PhotoPostViewerSharedModules,
    DirectivesModule,
    ProfileRoutingModule
  ],
  declarations: [
  	ProfileHeaderComponent,
  	ProfileComponent,
  	TimelineComponent,
  	AboutComponent,
  	FriendsComponent,
  	PhotosComponent,
  	VideosComponent
  ],
  //entryComponents: [PhotoPostViewerContentComponent]
})
export class ProfileModule { }
