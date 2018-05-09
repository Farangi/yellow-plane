import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '@firebase/auth-types';

interface UserData {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  gender?: string;
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

  updateCurrentUser(value) {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.displayName,
        photoURL: user.photoURL
      }).then(res => {
        this.updateUserData(user, value.gender)
        .then(data => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
      }, err => reject(err));
    });
  }
  public updateUserData(user, gender) {
    // Sets user data to firestore on register
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    const data: UserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      gender: gender
    };
    return userRef.set(data, { merge: true });
  }
}
