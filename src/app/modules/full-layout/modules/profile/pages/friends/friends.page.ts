import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss']
})
export class FriendsComponent implements OnInit {

	friends: any = [];

  	constructor() { }

  	ngOnInit() {
  		this.friends.push({name:'Wakas Ali', location:'Lahore', counts:{friends:52, photos: 240, videos: 16}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Maya Ahmad', location:'Satgodha', counts:{friends:52, photos: 240, videos: 16}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Hassan Murtaza', location:'Islamabad', counts:{friends:49, photos: 132, videos: 5}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Maryam khan', location:'Karachi', counts:{friends:65, photos: 104, videos: 12}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Najeeb Ahmad', location:'Mianwali', counts:{friends:49, photos: 132, videos: 5}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Ahsan Rokhri', location:'Islamabad', counts:{friends:82, photos: 204, videos: 27}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Murtaza Bhutto', location:'Faisalabad', counts:{friends:73, photos: 380, videos: 11}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  		this.friends.push({name:'Shamil khan', location:'Quetta', counts:{friends:58, photos: 304, videos: 19}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	}

}
