import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../../../node_modules/@angular/router';
import { CircleService } from '../../../../../../shared/services/circles.service';

@Component({
  selector: 'app-circle-open-topic',
  templateUrl: './circle-open-topic.page.html',
  styleUrls: ['./circle-open-topic.page.scss']
})
export class CircleOpenTopicComponent implements OnInit {
    id: string;
    posts: any = [];
  	constructor(
      private activeRoute: ActivatedRoute,
      private circleService: CircleService) { }

  	ngOnInit() {
      this.activeRoute.params.subscribe(routeParams => {
        this.id = routeParams.topicId;
        console.log(routeParams.topicId);
        this.circleService.getAllPostsInTopic(this.id).subscribe(posts => {
          this.posts = posts;
        }, err => console.log(err));
      });
    }

    submitPost(text: string) {
      let post = {
        text: text,
        topicId: this.id
      };
      this.circleService.submitPost(post)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }

}
