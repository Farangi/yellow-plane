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

import { PageRoutingModule } from './page-routing.module';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageComponent } from './pages/page/page.page';
import { TimelineComponent } from './pages/timeline/timeline.page';
import { AboutComponent } from './pages/about/about.page';
import { PhotosComponent } from './pages/photos/photos.page';
import { VideosComponent } from './pages/videos/videos.page';
import { EventsComponent } from './pages/events/events.page';
import { StatisticsComponent } from './pages/statistics/statistics.page';

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
    PageRoutingModule
  ],
  declarations: [
  	PageHeaderComponent,
  	PageComponent,
  	TimelineComponent,
  	AboutComponent,
  	PhotosComponent,
    VideosComponent,
    EventsComponent,
    StatisticsComponent
  ],
})
export class PageModule { }
