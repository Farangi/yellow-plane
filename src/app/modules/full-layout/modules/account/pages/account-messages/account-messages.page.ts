import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-messages',
  templateUrl: './account-messages.page.html',
  styleUrls: ['./account-messages.page.scss']
})
export class AccountMessagesComponent implements OnInit {

  public openPopup: Function;
  public message: String = '';

  constructor() { }

  ngOnInit() {
  }

  setPopupAction(fn: any) {
    this.openPopup = fn;
  }

}
