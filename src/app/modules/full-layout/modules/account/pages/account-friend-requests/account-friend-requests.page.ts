import { UserService } from './../../../../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-friend-requests',
  templateUrl: './account-friend-requests.page.html',
  styleUrls: ['./account-friend-requests.page.scss']
})
export class AccountFriendRequestsComponent implements OnInit {
  friendRequests: any[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getCurrentUserData().then((user:UserData) => {
      this.userService.getFriendRequests(user.username).subscribe(data => {
        this.friendRequests = data;
      }, err => console.log(err));
    }).catch(err => console.log(err));
  }

  acceptFriendRequest(request: any) {
    this.userService.acceptFriendRequest(request)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  declineFriendRequest(request: any) {
    this.userService.declineFriendRequest(request)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
}
