import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { UserService } from '../../../../../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfileComponent implements OnInit {

  user: UserData;
  displayName: string;
  constructor(
    //public userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.user = routeData['data'];
      this.displayName = this.user.fname + ' ' + this.user.lname;
    });
  }

}
