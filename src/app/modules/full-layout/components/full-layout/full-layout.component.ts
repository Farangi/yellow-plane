import { Component, OnInit } from '@angular/core';
import { FirebaseUserModel } from '../../../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
	user: FirebaseUserModel = new FirebaseUserModel();
  	constructor(private route: ActivatedRoute,) { }

  	ngOnInit() {
  		this.route.data.subscribe(routeData => {
  			this.user = routeData['data'];
      		console.log(this.user);
    	});
  	}

}
