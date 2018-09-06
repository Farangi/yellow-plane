import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { map } from "rxjs/operators";
import { AngularFirestore } from "angularfire2/firestore";
import { UserService } from "./user.service";

@Injectable()
export class CircleService {
  constructor(private db: AngularFirestore, private userService: UserService) {
    // For time error
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  submitCircle(circle: any) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUserData()
        .then((user: UserData) => {
          circle.user = user.username;
          this.db
            .collection("circles")
            .add(circle)
            .then(res => {
              resolve("Circle Submitted Succesfuly");
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  submitTopic(topic: any, circleId: string) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUserData()
        .then((user: UserData) => {
          topic.user = user.username;
          topic.circleId = circleId;
          this.db
            .collection("topics")
            .add(topic)
            .then(res => {
              resolve("Topic Submitted Succesfuly");
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  submitPost(post: any) {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUserData()
        .then((user: UserData) => {
          post.user = user.username;
          this.db
            .collection("circle-topic-posts")
            .add(post)
            .then(res => {
              resolve("Post Submitted Succesfuly");
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  getAllCircles() {
    return this.db
      .collection("circles")
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

  getAllTopicsInCircle(circleId: string) {
    return this.db
      .collection("topics", ref => ref.where("circleId", "==", circleId))
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

  getAllPostsInTopic(topicId: string) {
    return this.db
      .collection("circle-topic-posts", ref => ref.where("topicId", "==", topicId))
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
}
