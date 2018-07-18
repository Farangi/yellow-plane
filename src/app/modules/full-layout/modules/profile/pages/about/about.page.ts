import { PersonalInfoService } from './../../../../../../shared/services/profile/personalInfo.service';
import { HobbiesAndInterestsService } from './../../../../../../shared/services/profile/hobbiesAndInterests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutComponent implements OnInit {

  hobbiesAndInterests: HobbiesAndInterests;
  personalInfo: PersonalInfo;
  constructor(
    private hobbiesAndInterestsService: HobbiesAndInterestsService,
    private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.hobbiesAndInterests = {};
    this.personalInfo = {};
    this.hobbiesAndInterestsService.getHobbiesAndInterests()
    .then(data => this.hobbiesAndInterests = data)
    .catch(err => console.log(err));

    this.personalInfoService.getPersonalInfo()
    .then(data => this.personalInfo = data)
    .catch(err => console.log(err));
  }

}
