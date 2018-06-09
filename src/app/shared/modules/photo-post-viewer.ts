import { NgModule } from '@angular/core';
import { SwiperSharedModules } from './swiper';

import { PhotoPostViewerContentComponent } from '../components/photo-post-viewer-content/photo-post-viewer-content.component';
import { PhotoPostViewerComponent } from '../components/photo-post-viewer/photo-post-viewer.component';

@NgModule({
  imports: [
    SwiperSharedModules
  ],
  declarations: [
    PhotoPostViewerComponent,
    PhotoPostViewerContentComponent
  ],
  exports: [
    PhotoPostViewerComponent,
  ],
  entryComponents: [PhotoPostViewerContentComponent]
})
export class PhotoPostViewerSharedModules { }
