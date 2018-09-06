import { PhotoService } from '../../../../../../shared/services/photos.service';
import { PostService } from '../../../../../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { HobbiesAndInterestsService } from '../../../../../../shared/services/profile/hobbiesAndInterests.service';
import { PersonalInfoService } from '../../../../../../shared/services/profile/personalInfo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss']
})
export class TimelineComponent implements OnInit {
  username;
  hobbiesAndInterests: HobbiesAndInterests;
  personalInfo: PersonalInfo;
  posts: any = [];
  PostComments: any = [];
  constructor(
    private hobbiesAndInterestsService: HobbiesAndInterestsService,
    private personalInfoService: PersonalInfoService,
    private route: ActivatedRoute,
    private postService: PostService,
    private photoService: PhotoService,
    private router: Router) {
      router.events.subscribe((val) => {
        if(this.username !== this.route.snapshot.parent.params['username']) {
          this.ngOnInit();
        }
      });
    }

  ngOnInit() {
    this.username = this.route.snapshot.parent.params['username'];

    this.hobbiesAndInterests = {};
    this.personalInfo = {};

    this.hobbiesAndInterestsService.getHobbiesAndInterestsByUserName(this.username)
      .then(data => this.hobbiesAndInterests = data)
      .catch(err => console.log(err));

    this.personalInfoService.getPersonalInfoByUserName(this.username)
      .then(data => this.personalInfo = data)
      .catch(err => console.log(err));

    this.postService.getUserPostsByUsername(this.username).subscribe(posts => {
      this.posts = posts;
      this.posts.forEach((post, index, postsArray) => {
        if (post.type === 'PHOTO') {
          this.photoService.getUpload(post.uploadId).subscribe((upload: any) => {
            // works for single photo only
            postsArray[index].photoUrl = upload.photos[0].photoUrl;
          });
        }

        this.postService.getCommentsByPostId(post.id).subscribe(comments => {
          let _comments: any = [];
          _comments = comments;

          _comments.forEach((comment, index, commentsArray) => {
            this.postService.getRepliesByCommentId(comment.id).subscribe(replies => {
              commentsArray[index].replies = replies;
            }, err => console.log(err));
          });

          postsArray[index].comments = _comments;
        }, err => console.log(err));
      });
    }, err => console.log(err));
  }

  likePost(post: any) {
    this.postService.likePost(post)
      .then(res => {
        console.log('Liked!');
      })
      .catch(err => console.log(err));
  }

  postComment(post: any, comment: any) {
    this.postService.commentPost(post.id, comment).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }

  commentReply(comment: any, reply: any) {
    this.postService.replyComment(comment.id, reply).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }

  likeComment(comment: any) {
    this.postService.likeComment(comment)
      .then(res => {
        console.log('Comment Liked!');
      })
      .catch(err => console.log(err));
  }

  likeReply(reply: any) {
    this.postService.likeReply(reply)
      .then(res => {
        console.log('Reply Liked!');
      })
      .catch(err => console.log(err));
  }

}
