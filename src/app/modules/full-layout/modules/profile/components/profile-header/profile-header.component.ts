import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from '../../../../../../shared/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnChanges {
  @Input('username') username;
  @Input('displayName') displayName;
  @Input('image') image;

  showProfileControls: boolean;
  showFriendRequestControls: boolean = true;
  usernameCurrent: string;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.userService.getCurrentUserData().then((user: UserData) => {
      this.usernameCurrent = user.username;
      if (this.usernameCurrent == this.username) {
        this.showProfileControls = true;
      } else {
        this.showProfileControls = false;
      }
      this.userService.checkRelation(this.usernameCurrent, this.username).subscribe((relations: any[]) => {
        if(relations.length) {
          if(relations[0].status == 'pending' || relations[0].status == 'accepted') {
            this.showFriendRequestControls = false;
          }
          if (relations[0].status == 'rejected') {
            this.showFriendRequestControls = true;
          }
        }
      });
    }).catch(err => console.log(err));
  }

  sendFriendRequest() {
    if (this.username) {
      this.userService.sendFriendRequest(this.username)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  }

}
