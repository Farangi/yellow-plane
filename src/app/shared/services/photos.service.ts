import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import { resolve } from "path";
import { reject } from "q";
import { Observable } from "@firebase/util";

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
        const path = `photos/${user.uid}/${new Date().getTime()}_${
          photo.underlyingFile.name
        }`;
        const customMetadata = { app: "Yellow Plane" };
        // start upload
        this.storage
          .upload(path, file, { customMetadata })
          .then(resp => {
            resp.ref
              .getDownloadURL()
              .then(url => {
                PHOTOS.push({
                  name: photo.underlyingFile.name,
                  photoUrl: url,
                  uploadedAt: new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })
                });
                if (PHOTOS.length === photosWithDetail.photos.length) {
                  this.db
                    .collection("uploads")
                    .add({
                      userId: user.uid,
                      privacy: photosWithDetail.privacy,
                      description: photosWithDetail.description,
                      createdAt: new Date().toLocaleTimeString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }),
                      photos: PHOTOS
                    })
                    .then(resp => {
                      resolve(resp.id);
                    })
                    .catch(err => {
                      reject(err);
                    });
                }
              })
              .catch(err => {
                reject(err);
              });
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  uploadPhotos(photosWithDetail: any) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          this.executeUpload(photosWithDetail, user)
            .then(resp => {
              //console.log(resp);
              resolve("Photos Successfuly Uploaded!");
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

  uploadPhotosStatus(photosWithDetail: any) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          this.executeUpload(photosWithDetail, user)
            .then(resp => {
              resolve(resp);
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

  getUpload(id) {
    return this.db.doc(`uploads/${id}`).valueChanges();
  }

  private getUploads(user: any) {
    return new Promise((resolve, reject) => {
      let UPLOADS = [];
      let queryResponse = this.db
        .collection("uploads", ref => ref.where("userId", "==", user.uid))
        .valueChanges();
      queryResponse.subscribe(
        data => {
          data.forEach(upload => {
            UPLOADS.push(upload);
            if (data.length === UPLOADS.length) {
              resolve(UPLOADS);
            }
          });
        },
        err => {
          reject(err);
        }
      );
    });
  }

  getCurrentUserPhotos() {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(user => {
          this.getUploads(user)
            .then(resp => {
              resolve(resp);
            })
            .catch(err => {
              reject(err);
            });

          //resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
