import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';

import { FormsSharedModules } from '../../../../shared/modules/forms';
import { SelectSharedModules } from '../../../../shared/modules/select';
import { FilePickerModules } from '../../../../shared/modules/file-picker';

import { HomeComponent } from './pages/home/home.page';
import { NewsFeedComponent } from './pages/news-feed/news-feed.page';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    FormsSharedModules,
    SelectSharedModules,
    FilePickerModules
  ],
  declarations: [HomeComponent, NewsFeedComponent]
})
export class HomeModule { }
