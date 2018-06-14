import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsSharedModules } from '../../../../shared/modules/forms';

import { CircleRoutingModule } from './circle-routing.module';

import { CircleHeaderComponent } from './components/circle-header/circle-header.component';
// import { AccountSidebarComponent } from './components/account-sidebar/account-sidebar.component';
// import { AccountHeaderPageComponent } from './components/account-header-page/account-header-page.component';
// import { AccountSidebarPageComponent } from './components/account-sidebar-page/account-sidebar-page.component';

import { CircleComponent } from './pages/circle/circle.page';
import { CirclesComponent } from './pages/circles/circles.page';
import { CircleCategoriesComponent } from './pages/circle-categories/circle-categories.page';
import { CircleOpenCircleComponent } from './pages/circle-open-circle/circle-open-circle.page';
import { CircleOpenTopicComponent } from './pages/circle-open-topic/circle-open-topic.page';
import { CircleCreateTopicComponent } from './pages/circle-create-topic/circle-create-topic.page';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsSharedModules,
    CircleRoutingModule
  ],
  declarations: [
    CircleHeaderComponent, 
    // AccountSidebarComponent, 
    // AccountHeaderPageComponent, 
    // AccountSidebarPageComponent, 
    CircleComponent, 
    CirclesComponent,
    CircleCategoriesComponent,
    CircleOpenCircleComponent,
    CircleOpenTopicComponent,
    CircleCreateTopicComponent
  ]
})
export class CircleModule { }
