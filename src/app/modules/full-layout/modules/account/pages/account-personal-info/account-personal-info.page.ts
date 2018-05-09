import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-personal-info',
  templateUrl: './account-personal-info.page.html',
  styleUrls: ['./account-personal-info.page.scss']
})
export class AccountPersonalInfoComponent implements OnInit {

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
