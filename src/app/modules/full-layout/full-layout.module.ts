import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullLayoutRoutingModule } from './full-layout-routing.module';

import { DirectivesModule } from '../../shared/directives/directives.module';

import { ScrollbarModule } from '../../shared/modules/scrollbar';

import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { ChatSidebarComponent } from '../../shared/components/chat-sidebar/chat-sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { PostService } from '../../shared/services/posts.service';

//import { PhotoPostViewerContentComponent } from '../../shared/components/photo-post-viewer-content/photo-post-viewer-content.component';
//import { PhotoPostViewerComponent } from '../../shared/components/photo-post-viewer/photo-post-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FullLayoutRoutingModule,
    DirectivesModule,
    ScrollbarModule
  ],
  declarations: [
    SidebarComponent,
    ChatSidebarComponent,
  	HeaderComponent,
    FullLayoutComponent,
    //PhotoPostViewerComponent,
    //PhotoPostViewerContentComponent
  ],
  providers: [PostService]
})
export class FullLayoutModule { }
