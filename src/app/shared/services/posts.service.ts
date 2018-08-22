import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { map } from "rxjs/operators";
import { AngularFirestore, DocumentChangeAction } from "angularfire2/firestore";
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
            .then(res => {
              resolve("Submitted Succesfuly");
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  commentPost(postId: any, comment: any) {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData().then((user: UserData) => {
        this.db.collection("comments").add({
          message: comment,
          postId: postId,
          user: user.username
        })
          .then(res => {
            resolve('Comment posted successfuly');
          })
          .catch(err => reject(err));
      })
        .catch(err => reject(err));
    });
  }

  replyComment(commentId: any, reply: any) {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData().then((user: UserData) => {
        this.db.collection("replies").add({
          message: reply,
          commentId: commentId,
          user: user.username
        })
          .then(res => {
            resolve('Reply posted successfuly');
          })
          .catch(err => reject(err));
      })
        .catch(err => reject(err));
    });
  }

  getUserPostsByUsername(username: string) {
    // return this.db.collection('posts', ref => ref.where("user", "==", username))
    //   .valueChanges();
    return this.db
      .collection("posts", ref => ref.where("user", "==", username))
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

  getCommentsByPostId(postId: any) {
    return this.db.collection("comments", ref => ref.where("postId", "==", postId))
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

  getRepliesByCommentId(commentId: any) {
    return this.db.collection("replies", ref => ref.where("commentId", "==", commentId))
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

  likePost(post: any) {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData().then((user: UserData) => {
        if (post.likes) {
          if (!post.likes.find(like => like.username == user.username)) {
            post.likes.push({
              username: user.username
            });
            this.db.doc(`posts/${post.id}`)
              .update({ likes: post.likes })
              .then(res => {
                resolve();
              })
              .catch(err => reject(err));
          }
        } else {
          post.likes = [{ username: user.username }];
          this.db.doc(`posts/${post.id}`)
            .update({ likes: post.likes })
            .then(res => {
              resolve();
            })
            .catch(err => reject(err));
        }
      }).catch(err => reject(err));
    });
  }

  likeComment(comment: any) {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData().then((user: UserData) => {
        if (comment.likes) {
          if (!comment.likes.find(like => like.username == user.username)) {
            comment.likes.push({
              username: user.username
            });
            this.db.doc(`comments/${comment.id}`)
              .update({ likes: comment.likes })
              .then(res => {
                resolve();
              })
              .catch(err => reject(err));
          }
        } else {
          comment.likes = [{ username: user.username }];
          this.db.doc(`comments/${comment.id}`)
            .update({ likes: comment.likes })
            .then(res => {
              resolve();
            })
            .catch(err => reject(err));
        }
      }).catch(err => reject(err));
    });
  }

  likeReply(reply: any) {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData().then((user: UserData) => {
        if (reply.likes) {
          if (!reply.likes.find(like => like.username == user.username)) {
            reply.likes.push({
              username: user.username
            });
            this.db.doc(`replies/${reply.id}`)
              .update({ likes: reply.likes })
              .then(res => {
                resolve();
              })
              .catch(err => reject(err));
          }
        } else {
          reply.likes = [{ username: user.username }];
          this.db.doc(`replies/${reply.id}`)
            .update({ likes: reply.likes })
            .then(res => {
              resolve();
            })
            .catch(err => reject(err));
        }
      }).catch(err => reject(err));
    });
  }
}
