import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankLayoutRoutingModule } from './blank-layout-routing.module';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';

@NgModule({
  imports: [
    CommonModule,
    BlankLayoutRoutingModule
  ],
  declarations: [BlankLayoutComponent]
})
export class BlankLayoutModule { }
