import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingComponent } from './pages/landing/landing.page';
import { FormsSharedModules } from '../../../../shared/modules/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsSharedModules
  ],
  providers: [],
  declarations: [LandingComponent]
})
export class AuthModule { }
