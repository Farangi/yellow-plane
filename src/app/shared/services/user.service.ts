import { ProfileComponent } from './../../modules/full-layout/modules/profile/pages/profile/profile.page';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

interface UserData {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  gender?: string;
  age?: number;
  accountType: string;
}

@Injectable()
export class UserService {

  constructor(
    private db: AngularFirestore
  ) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }


  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:no-shadowed-variable
      const user = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  checkAccountType() {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      this.db.doc<UserData>(`users/${user.uid}`).ref.get()
      .then(response => {
        resolve(response.data().accountType);
      }).catch(err => {
        reject(err);
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.firstName + ' ' + value.lastName,
        photoURL: user.photoURL
      }).then(res => {
        this.updateUserData(user, value)
        .then(data => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
      }, err => reject(err));
    });
  }
  private updateUserData(user, userData) {
    // Sets user data to firestore on register
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    const data: UserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      gender: userData.gender,
      age: userData.age,
      accountType: userData.accountType
    };
    return userRef.set(data, { merge: true });
  }
}
