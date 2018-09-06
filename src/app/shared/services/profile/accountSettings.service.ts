import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class AccountSettingsService {
    constructor(
        private db: AngularFirestore,
        private userService: UserService
    ) {
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }

    getAccountSettings() {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser().then(user => {
                this.db.doc<AccountSettings>(`account_settings/${user.uid}`).ref.get()
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

    public updateAccountSettings(data: AccountSettings) {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser().then(user => {
                const accountSettingsRef: AngularFirestoreDocument<any> = this.db.doc(`account_settings/${user.uid}`);
                accountSettingsRef.set(data, {merge: true})
                .then(res => {
                    resolve('Settings successfully updated');
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
