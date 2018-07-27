import { UserService } from "./../user.service";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";

@Injectable()
export class EducationsAndEmploymentsService {
  constructor(private db: AngularFirestore, private userService: UserService) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getEducationsAndEmploymentsByUserName(username: string) {
    return new Promise((resolve, reject) => {
      this.userService.getUserIdByUsername(username).then(uid => {
        this.db
        .doc<EducationsAndEmployments>(`educations_and_employments/${uid}`)
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

  getEducationsAndEmployments() {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          this.db
            .doc<EducationsAndEmployments>(
              `educations_and_employments/${user.uid}`
            )
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

  public updateEducationsAndEmployments(data: EducationsAndEmployments) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          const educationsAndEmploymentsRef: AngularFirestoreDocument<
            any
          > = this.db.doc(`educations_and_employments/${user.uid}`);
          educationsAndEmploymentsRef
            .set(data, { merge: true })
            .then(res => {
              resolve("Educations & Employments successfully updated");
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
