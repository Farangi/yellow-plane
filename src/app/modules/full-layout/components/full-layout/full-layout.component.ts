import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  user: UserData;
  displayName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      this.user = routeData['data'];
      this.displayName = this.user.fname + ' ' + this.user.lname;
    });
  }

}
