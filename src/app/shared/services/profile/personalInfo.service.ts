import { UserService } from "../user.service";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";

@Injectable()
export class PersonalInfoService {
  constructor(private db: AngularFirestore, private userService: UserService) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getPersonalInfoByUserName(username: string) {
    return new Promise((resolve, reject) => {
      this.userService.getUserIdByUsername(username).then(uid => {
        this.db
        .doc<PersonalInfo>(`personal_info/${uid}`)
        .ref.get()
        .then(response => {
          resolve(response.data());
        })
        .catch(err => {
          reject(err);
        });
      }).catch(err => reject(err));
    });
  }

  getPersonalInfo() {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          this.db
            .doc<PersonalInfo>(`personal_info/${user.uid}`)
            .ref.get()
            .then(response => {
              resolve(response.data());
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public updatePersonalInfo(data: PersonalInfo) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          const personalInfoRef: AngularFirestoreDocument<any> = this.db.doc(
            `personal_info/${user.uid}`
          );
          personalInfoRef
            .set(data, { merge: true })
            .then(res => {
              resolve("Info successfully updated");
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
