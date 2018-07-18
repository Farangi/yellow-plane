import { EducationsAndEmploymentsService } from './../../../../../../shared/services/profile/educationsAndEmployments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-education',
  templateUrl: './account-education.page.html',
  styleUrls: ['./account-education.page.scss']
})
export class AccountEducationComponent implements OnInit {

  educations: any = [];
  employments: any = [];

  constructor(private educationsAndEmploymentsService: EducationsAndEmploymentsService) { }

  ngOnInit() {
    this.educationsAndEmploymentsService.getEducationsAndEmployments()
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

  addEducation() {
    this.educations.push({ title: '', time: '', description: '' });
  }

  addEmployment() {
    this.employments.push({ title: '', time: '', description: '' });
  }

  updateEducationsAndEmployments() {
    this.educationsAndEmploymentsService.updateEducationsAndEmployments({
      educations: this.educations,
      employments: this.employments
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

}
