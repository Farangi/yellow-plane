import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FileHelpersModule } from 'ngx-file-helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    //FileHelpersModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }