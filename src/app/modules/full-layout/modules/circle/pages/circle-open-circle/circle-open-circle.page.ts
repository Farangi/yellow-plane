import { CircleService } from './../../../../../../shared/services/circles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-circle-open-circle',
  templateUrl: './circle-open-circle.page.html',
  styleUrls: ['./circle-open-circle.page.scss']
})
export class CircleOpenCircleComponent implements OnInit {
    id;
    topics: any = [];
    constructor(
      private activeRoute: ActivatedRoute,
      private circleService: CircleService) { }

  	ngOnInit() {
      this.activeRoute.params.subscribe(routeParams => {
        //console.log(routeParams.id);
        this.id = routeParams.id;
        this.circleService.getAllTopicsInCircle(this.id).subscribe(topics => {
          this.topics = topics;
        }, err => console.log(err));
      });
    }

}
