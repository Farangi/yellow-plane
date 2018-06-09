import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page-personal-info',
  templateUrl: './account-page-personal-info.page.html',
  styleUrls: ['./account-page-personal-info.page.scss']
})
export class AccountPagePersonalInfoComponent implements OnInit {

	model: any;
  	
  	constructor() { }

  	ngOnInit() { 
  		this.model = {
			"year": 1984,
	  		"month": 10,
	  		"day": 24
  		};
  	}

}
