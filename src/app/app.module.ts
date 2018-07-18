import { ProfileGuard } from './shared/guards/profile.gaurd';
import { PageGuard } from './shared/guards/page.gaurd';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { ScrollService } from './shared/services/scroll.service';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserResolver } from './shared/resolvers/user.resolver';

//import { FullLayoutComponent } from './shared/components/full-layout/full-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    //FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [ScrollService, AuthService, UserService, UserResolver, AuthGuard, PageGuard, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
