import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../../../shared/services/user.service';
import { PersonalInfoService } from './../../../../../../shared/services/profile/personalInfo.service';
import { HobbiesAndInterestsService } from './../../../../../../shared/services/profile/hobbiesAndInterests.service';
import { Component, OnInit } from '@angular/core';
import { EducationsAndEmploymentsService } from '../../../../../../shared/services/profile/educationsAndEmployments.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutComponent implements OnInit {

  hobbiesAndInterests: HobbiesAndInterests;
  personalInfo: PersonalInfo;
  educations: any = [];
  employments: any = [];
  constructor(
    private userService: UserService,
    private hobbiesAndInterestsService: HobbiesAndInterestsService,
    private personalInfoService: PersonalInfoService,
    private educationsAndEmploymentsService: EducationsAndEmploymentsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.parent.params['username'];

    this.hobbiesAndInterests = {};
    this.personalInfo = {};

    this.hobbiesAndInterestsService.getHobbiesAndInterestsByUserName(username)
    .then(data => this.hobbiesAndInterests = data)
    .catch(err => console.log(err));

    this.personalInfoService.getPersonalInfoByUserName(username)
    .then(data => this.personalInfo = data)
    .catch(err => console.log(err));

    this.educationsAndEmploymentsService.getEducationsAndEmploymentsByUserName(username)
      .then((resp: EducationsAndEmployments) => {
        if (resp) {
          if (resp.educations) {
            this.educations = resp.educations;
          }
          if (resp.employments) {
            this.employments = resp.employments;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

}
