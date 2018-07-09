import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-messages',
  templateUrl: './account-page-messages.page.html',
  styleUrls: ['./account-page-messages.page.scss']
})
export class AccountPageMessagesComponent implements OnInit {

  public openPopup: Function;
  public message: String = '';

  constructor() { }

  ngOnInit() {
  }

  setPopupAction(fn: any) {
    this.openPopup = fn;
  }

}
