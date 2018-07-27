import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('username') username;
  @Input('displayName') displayName;
	selectedTab : string = '';

  	constructor(
  		private router: Router,
  		public authService: AuthService) { }

	ngOnInit() {
	}

	selectTab(tab){
		if(tab === this.selectedTab){
			this.selectedTab = '';
		}
		else{
			this.selectedTab = tab;
		}
	}

	logout() {
	    this.authService.doLogout()
	    .then((res) => {
	    	this.router.navigate(['/auth']);
	    }, (error) => {
	    	console.log('Logout error', error);
	    });
	}

}
