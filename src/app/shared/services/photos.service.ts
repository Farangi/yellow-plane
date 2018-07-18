import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable()
export class PhotoService {

    task: AngularFireUploadTask;
    constructor(
        private db: AngularFirestore,
        private storage: AngularFireStorage,
        private userService: UserService
    ) {
        // For time error
        db.firestore.settings({ timestampsInSnapshots: true });
    }

    private executeUpload(photosWithDetail: any, user: any) {
        return new Promise((resolve, reject) => {
            let PHOTOS = [];
            photosWithDetail.photos.forEach(photo => {
                const file = photo.underlyingFile;
                const path = `photos/${user.uid}/${new Date().getTime()}_${photo.underlyingFile.name}`;
                const customMetadata = { app: 'Yellow Plane' };

                this.storage.upload(path, file, { customMetadata })
                    .then(resp => {
                        resp.ref.getDownloadURL().then(url => {
                            PHOTOS.push({
                                name: photo.underlyingFile.name,
                                photoUrl: url,
                                uploadedAt: new Date().getTime().toString()
                            });
                            if (PHOTOS.length === photosWithDetail.photos.length) {
                                this.db.collection('uploads').add({
                                    userId: user.uid,
                                    privacy: photosWithDetail.privacy,
                                    description: photosWithDetail.description,
                                    createdAt: new Date().getTime().toString(),
                                    photos: PHOTOS
                                })
                                    .then(resp => {
                                        //console.log(resp);
                                        resolve(resp);
                                    })
                                    .catch(err => {
                                        reject(err);
                                    })
                            }
                        }).catch(err => {
                            reject(err);
                        })
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        });
    }

    uploadPhotos(photosWithDetail: any) {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(user => {
                    this.executeUpload(photosWithDetail, user)
                        .then(resp => {
                            //console.log(resp); 
                            resolve('Photos Successfuly Uploaded!');
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

    private getUploads(user: any) {
        return new Promise((resolve, reject) => {
            let UPLOADS = [];
            let queryResponse = this.db.collection('uploads', ref => ref.where('userId', '==', user.uid))
                .valueChanges();
            queryResponse.subscribe(data => {
                console.log("data.length" + data.length);
                console.log("UPLOADS.length" + UPLOADS.length);
                data.forEach(upload => {
                    console.log(upload);
                    UPLOADS.push(upload);
                    if (data.length === UPLOADS.length) {
                        resolve(UPLOADS);
                    }
                });
            }, err => {
                reject(err);
            });
            // queryResponse.forEach(upload => {
            //     console.log(upload);
            //     UPLOADS.push(upload);
                
            // });
        });
    }

    getCurrentUserPhotos() {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser().then(user => {
                this.getUploads(user).then(resp => {
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                });

                //resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}
