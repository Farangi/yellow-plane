import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { map, switchMap } from "rxjs/operators";
import { combineLatest } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import * as firebase from "firebase";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  constructor(private db: AngularFirestore) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:no-shadowed-variable
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject("No user logged in");
        }
      });
    });
  }

  checkRelation(checker: string, checkee: string) {
    const senderRef = this.db.collection("relations", ref =>
    ref.where("sender", "==", checker).where("reciever","==",checkee));

    const recieverRef = this.db.collection("relations", ref =>
    ref.where("sender", "==", checkee).where("reciever","==",checker));

    return combineLatest(
      senderRef.valueChanges(),
      recieverRef.valueChanges(),
      (senderRelations, recieverRelations) => {
        return senderRelations.concat(recieverRelations);
      });
  }

  getFriendRelationsByUsername(user: string) {
    const senderRef = this.db.collection("relations", ref =>
    ref.where("sender", "==", user).where("status","==","accepted"));

    const recieverRef = this.db.collection("relations", ref =>
    ref.where("reciever", "==", user).where("status","==","accepted"));

    return combineLatest(
      senderRef.valueChanges(),
      recieverRef.valueChanges(),
      (senderRelations, recieverRelations) => {
        return senderRelations.concat(recieverRelations);
      });
  }

  combinerTestingFunc(checker: string, checkee: string) {
  }

  getFriendRequests(username: string): Observable<any> {
    return this.db
      .collection("relations", ref => ref.where("reciever", "==", username))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: Object = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  acceptFriendRequest(request: any) {
    return new Promise((resolve, reject) => {
      this.db.doc(`relations/${request.id}`).update({
        status: 'accepted'
      }).then(res => resolve('Acceptedd!')).catch(err => reject(err));
    });
  }

  declineFriendRequest(request: any) {
    return new Promise((resolve, reject) => {
      this.db.doc(`relations/${request.id}`).update({
        status: 'rejected'
      }).then(res => resolve('Rejected!')).catch(err => reject(err));
    });
  }

  sendFriendRequest(username) {
    return new Promise((resolve, reject) => {
      this.getCurrentUserData()
        .then((user: UserData) => {
          this.checkRelation(user.username, username).subscribe((relations: any[]) => {
            if (!relations.length) {
              this.db.collection("relations")
              .add({
                sender: user.username,
                reciever: username,
                status: "pending"
              })
              .then(res => {
                resolve('Friend Request Sent');
              })
              .catch(err => reject(err));
            }
          });
        })
        .catch(err => reject(err));
    });
  }

  getUserIdByUsername(username: string) {
    return new Promise((resolve, reject) => {
      this.db
        .collection("users", ref => ref.where("username", "==", username))
        .snapshotChanges()
        .subscribe(
          data => {
            resolve(data[0].payload.doc.id);
          },
          err => reject(err)
        );
    });
  }

  getUserByUsername(username: string) {
    return new Promise((resolve, reject) => {
      this.db
        .collection("users", ref => ref.where("username", "==", username))
        .valueChanges()
        .subscribe(
          data => {
            resolve(data[0]);
          },
          err => reject(err)
        );
    });
  }

  checkAccountType() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser()
        .then(user => {
          this.db
            .doc<UserData>(`users/${user.uid}`)
            .ref.get()
            .then(response => {
              resolve(response.data().accountType);
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

  getCurrentUserData() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser()
        .then(user => {
          this.db
            .doc<UserData>(`users/${user.uid}`)
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

  registerCurrentUser(formData) {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      const data: UserData = {
        fname: formData.firstName,
        lname: formData.lastName,
        gender: formData.gender,
        age: formData.age,
        accountType: formData.accountType,
        username: formData.username,
        joinedAt: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      };
      user
        .updateProfile({
          displayName: formData.firstName + " " + formData.lastName,
          photoURL: user.photoURL
        })
        .then(res => {
          this.db
            .doc(`users/${user.uid}`)
            .set(data, { merge: true })
            .then(() => resolve(res))
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }
}
