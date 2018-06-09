import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingComponent } from './pages/landing/landing.page';
import { FormsSharedModules } from '../../../../shared/modules/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AuthRoutingModule,
    FormsSharedModules
  ],
  providers: [],
  declarations: [LandingComponent]
})
export class AuthModule { }
