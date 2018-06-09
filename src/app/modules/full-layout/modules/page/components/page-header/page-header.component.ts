import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
	@Input('username') username;
	@Input('image') image;

	  constructor() { }

	  ngOnInit() {
	  }

}
