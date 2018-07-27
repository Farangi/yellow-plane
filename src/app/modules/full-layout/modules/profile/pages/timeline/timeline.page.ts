import { Component, OnInit } from '@angular/core';
import { HobbiesAndInterestsService } from '../../../../../../shared/services/profile/hobbiesAndInterests.service';
import { PersonalInfoService } from 'src/app/shared/services/profile/personalInfo.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss']
})
export class TimelineComponent implements OnInit {

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
