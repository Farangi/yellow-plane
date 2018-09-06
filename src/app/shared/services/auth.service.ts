import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService
  ) { }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      reject('Google Temporarily Disabled'); // Google disabled
      // const provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('profile');
      // provider.addScope('email');
      // this.afAuth.auth
      //   .signInWithPopup(provider)
      //   .then(res => {
      //     console.log(res); // res.additionalUserInfo.isNewUser
      //     resolve(res);
      //   }, err => {
      //     reject(err);
      //   });
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          this.userService.registerCurrentUser(value)
          .then(() => {
            resolve(res);
          })
          .catch(err => reject(err));
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }
}
