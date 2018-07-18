import { PersonalInfoService } from './../../../../../../shared/services/profile/personalInfo.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-account-personal-info',
	templateUrl: './account-personal-info.page.html',
	styleUrls: ['./account-personal-info.page.scss']
})
export class AccountPersonalInfoComponent implements OnInit {

	model: any;
	personalInfo: PersonalInfo;
	constructor(private personalInfoService: PersonalInfoService) { }

	ngOnInit() {
		this.personalInfo = {};
		this.model = {
			"year": 1984,
			"month": 10,
			"day": 24
		};
		this.personalInfoService.getPersonalInfo()
		.then(info => {
			if(info){
				this.personalInfo = info;
				this.model = this.personalInfo.birthday;
			}
		})
		.catch(err => {
			console.log(err);
		});
  	}
	
	updatePersonalInfo() {
		this.personalInfo.birthday = this.model;
		this.personalInfoService.updatePersonalInfo(this.personalInfo)
		.then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
	}
}
