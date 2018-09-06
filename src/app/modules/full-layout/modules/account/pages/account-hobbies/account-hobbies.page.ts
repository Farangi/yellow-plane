import { HobbiesAndInterestsService } from '../../../../../../shared/services/profile/hobbiesAndInterests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-hobbies',
  templateUrl: './account-hobbies.page.html',
  styleUrls: ['./account-hobbies.page.scss']
})
export class AccountHobbiesComponent implements OnInit {

  hobbiesAndInterests: HobbiesAndInterests;
  constructor(private hobbiesAndInterestsService: HobbiesAndInterestsService) { }

  ngOnInit() {
    this.hobbiesAndInterests = {};
    this.hobbiesAndInterestsService.getHobbiesAndInterests()
      .then(hobbies => {
        if (hobbies) {
          this.hobbiesAndInterests = hobbies;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateHobbiesAndInterests() {
    this.hobbiesAndInterestsService.updateHobbiesAndInterests(this.hobbiesAndInterests)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }

}
