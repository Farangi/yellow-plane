import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutComponent implements OnInit {

  friends: any = [];

  constructor() { }

  ngOnInit() {
    this.friends.push({name:'Wakas Ali', location:'Lahore', img:'/assets/img/avatar16.jpg', coverImg:'/assets/img/friend9.jpg', counts:{friends:52, photos: 240, videos: 16}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	this.friends.push({name:'Maya Ahmad', location:'Satgodha', img:'/assets/img/avatar17.jpg', coverImg:'/assets/img/friend10.jpg', counts:{friends:52, photos: 240, videos: 16}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	this.friends.push({name:'Noor Waqar', location:'Islamabad', img:'/assets/img/avatar3.jpg', coverImg:'/assets/img/friend11.jpg', counts:{friends:49, photos: 132, videos: 5}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	this.friends.push({name:'Naeem Khan', location:'Karachi', img:'/assets/img/avatar19.jpg', coverImg:'/assets/img/friend12.jpg', counts:{friends:65, photos: 104, videos: 12}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	this.friends.push({name:'Najeeb Ahmad', location:'Mianwali', img:'/assets/img/avatar1.jpg', coverImg:'/assets/img/friend1.jpg', counts:{friends:49, photos: 132, videos: 5}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	this.friends.push({name:'Sadia Ahsan', location:'Islamabad', img:'/assets/img/avatar20.jpg', coverImg:'/assets/img/friend13.jpg', counts:{friends:82, photos: 204, videos: 27}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  	this.friends.push({name:'Sidra Ali', location:'Faisalabad', img:'/assets/img/avatar5.jpg', coverImg:'/assets/img/friend5.jpg', counts:{friends:73, photos: 380, videos: 11}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
    this.friends.push({name:'Shamil khan', location:'Quetta', img:'/assets/img/avatar21.jpg', coverImg:'/assets/img/friend14.jpg', counts:{friends:58, photos: 304, videos: 19}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
    this.friends.push({name:'Mahira Khan', location:'Sargodha', img:'/assets/img/avatar22.jpg', coverImg:'/assets/img/friend15.jpg', counts:{friends:51, photos: 126, videos: 64}, bio:'Hi!, I’m Hassan and I’m a Community Manager for “abc”. Gamer and full time designer.', friendsSince:'December 2014'});
  }

}
