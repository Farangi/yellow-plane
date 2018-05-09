import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsSharedModules } from '../../../../shared/modules/forms';
import { DirectivesModule } from '../../../../shared/directives/directives.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileComponent } from './pages/profile/profile.page';
import { TimelineComponent } from './pages/timeline/timeline.page';
import { AboutComponent } from './pages/about/about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsSharedModules,
    DirectivesModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileHeaderComponent, ProfileComponent, TimelineComponent, AboutComponent]
})
export class ProfileModule { }
