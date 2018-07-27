import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class HobbiesAndInterestsService {
  constructor(
    private db: AngularFirestore,
    private userService: UserService
  ) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getHobbiesAndInterestsByUserName(username: string) {
    return new Promise((resolve, reject) => {
      this.userService.getUserIdByUsername(username).then(uid => {
        this.db.doc<HobbiesAndInterests>(`hobbies_and_interests/${uid}`).ref.get()
        .then(response => {
          resolve(response.data());
        }).catch(err => reject(err));
      }).catch(err => reject(err));
    });
  }

  getHobbiesAndInterests() {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser().then(user => {
        this.db.doc<HobbiesAndInterests>(`hobbies_and_interests/${user.uid}`).ref.get()
          .then(response => {
            resolve(response.data());
          }).catch(err => {
            reject(err);
          });
      }).catch(err => {
        reject(err);
      });
    });
  }

  public updateHobbiesAndInterests(data: HobbiesAndInterests) {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser().then(user => {
        const hobbiesAndInterestsRef: AngularFirestoreDocument<any> = this.db.doc(`hobbies_and_interests/${user.uid}`);
        hobbiesAndInterestsRef.set(data, { merge: true })
          .then(res => {
            resolve('Hobbies & Interests successfully updated');
          })
          .catch(err => {
            reject(err);
          });
      }).catch(err => {
        reject(err);
      });
    });
  }
}
