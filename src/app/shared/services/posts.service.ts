import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import {
  AngularFirestore
} from "angularfire2/firestore";
import { UserService } from "./user.service";

@Injectable()
export class PostService {
  constructor(private db: AngularFirestore, private userService: UserService) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  submitPost(post: any) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUserData()
        .then((user: UserData) => {
          post.user = user.username;
          this.db
            .collection("posts")
            .add(post)
            .then(res => { resolve('Submitted Succesfuly') })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }
  getUserPostsByUsername(username: string) {
    return this.db.collection('posts', ref => ref.where("user", "==", username))
      .valueChanges();
  }
}
