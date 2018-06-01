import { Component, OnInit } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReadFile } from 'ngx-file-helpers';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss']
})
export class NewsFeedComponent implements OnInit {
  public picked: ReadFile;

  postPhotoModal: any ;
  chooseFromPcModal: any ;

  privacyOptions = [{name: 'Everyone', value:'EVERYONE', icon:'fa-globe'}, 
                    {name: 'Friends', value:'FRIENDS', icon:'fa-users'},
                    {name: 'Only me', value:'ONLYME', icon:'fa-lock'}];
  privacy = this.privacyOptions[0].value;

  constructor(
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  onFilePicked(file: ReadFile) {
    this.picked = file;
    this.chooseFromPcModal.close();
  }

  openPostPhoto(content) {
    this.postPhotoModal = this.modalService.open(content, { size: 'lg', centered: true });
    this.postPhotoModal.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }

  openChooseFromPc(content) {
    this.postPhotoModal.close();
    this.chooseFromPcModal = this.modalService.open(content, { size: 'lg', centered: true });
  }

}
