import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from '../../../../../../shared/services/profile/accountSettings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss']
})
export class AccountSettingsComponent implements OnInit {

  accountSettings: AccountSettings = {
    whoCanViewYourPosts: "US",
    whoCanFriendYou: "EO",
    chatSound: true,
    notificationEmail: false,
    notificationSound: true
  };
  constructor(private accountSettingsService: AccountSettingsService) { }
  
  ngOnInit() {
    
    this.accountSettingsService.getAccountSettings()
      .then(settings => {
        if (settings) {
          this.accountSettings = settings;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateAccountSettings() {
		this.accountSettingsService.updateAccountSettings(this.accountSettings)
		.then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
  }
}
