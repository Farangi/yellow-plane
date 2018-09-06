import { CircleService } from './../../../../../../shared/services/circles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles-page',
  templateUrl: './circles.page.html',
  styleUrls: ['./circles.page.scss']
})
export class CirclesComponent implements OnInit {
  circles:any = [];
  constructor(private circleService: CircleService) { }

  ngOnInit() {
    this.circleService.getAllCircles().subscribe(circles => {
      this.circles = circles;
    }, err => console.log(err));
  }

}
