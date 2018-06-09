import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page-settings',
  templateUrl: './account-page-settings.page.html',
  styleUrls: ['./account-page-settings.page.scss']
})
export class AccountPageSettingsComponent implements OnInit {

	admins: any = [];

  	constructor() { }

  	ngOnInit() {
		this.admins.push({name:'Wakas Ali', location:'Lahore', img:'/assets/img/avatar16.jpg', coverImg:'/assets/img/friend9.jpg', counts:{friends:52, photos: 240, videos: 16}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.admins.push({name:'Maya Ahmad', location:'Satgodha', img:'/assets/img/avatar17.jpg', coverImg:'/assets/img/friend10.jpg', counts:{friends:52, photos: 240, videos: 16}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.admins.push({name:'Noor Waqar', location:'Islamabad', img:'/assets/img/avatar3.jpg', coverImg:'/assets/img/friend11.jpg', counts:{friends:49, photos: 132, videos: 5}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	}

}
