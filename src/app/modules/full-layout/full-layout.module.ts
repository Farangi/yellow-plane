import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullLayoutRoutingModule } from './full-layout-routing.module';

import { DirectivesModule } from '../../shared/directives/directives.module';

import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FullLayoutRoutingModule,
    DirectivesModule
  ],
  declarations: [
  	SidebarComponent,
  	HeaderComponent,
  	FullLayoutComponent,
  ]
})
export class FullLayoutModule { }
