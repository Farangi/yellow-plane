import { PhotoService } from './../../../../../../shared/services/photos.service';
import { PostService } from './../../../../../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { HobbiesAndInterestsService } from '../../../../../../shared/services/profile/hobbiesAndInterests.service';
import { PersonalInfoService } from 'src/app/shared/services/profile/personalInfo.service';
import { ActivatedRoute } from '../../../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss']
})
export class TimelineComponent implements OnInit {

  hobbiesAndInterests: HobbiesAndInterests;
  personalInfo: PersonalInfo;
  posts: any = [];
  constructor(
    private hobbiesAndInterestsService: HobbiesAndInterestsService,
    private personalInfoService: PersonalInfoService,
    private route: ActivatedRoute,
    private postService: PostService,
    private photoService: PhotoService) { }

  ngOnInit() {
    const username = this.route.snapshot.parent.params['username'];
    this.hobbiesAndInterests = {};
    this.personalInfo = {};

    this.hobbiesAndInterestsService.getHobbiesAndInterestsByUserName(username)
    .then(data => this.hobbiesAndInterests = data)
    .catch(err => console.log(err));

    this.personalInfoService.getPersonalInfoByUserName(username)
    .then(data => this.personalInfo = data)
    .catch(err => console.log(err));

    this.postService.getUserPostsByUsername(username).subscribe(posts => {
      this.posts = posts;
      this.posts.forEach((post, index, postsArray) => {
        if(post.type === 'PHOTO'){
          this.photoService.getUpload(post.uploadId).subscribe((upload:any) => {
            // works for single photo only
            postsArray[index].photoUrl = upload.photos[0].photoUrl;
          });
        }
      });
    })
  }

}
