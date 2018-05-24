import { Component, OnInit, AfterViewInit, ViewChild, ContentChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PhotoPostViewerContentComponent } from '../photo-post-viewer-content/photo-post-viewer-content.component';

@Component({
  selector: 'app-photo-post-viewer',
  templateUrl: './photo-post-viewer.component.html',
  styleUrls: ['./photo-post-viewer.component.scss']
})
export class PhotoPostViewerComponent implements OnInit {
	private photoPostModalRef: any ;
  	
  	constructor( 
  		private modalService: NgbModal ) { }

  	ngOnInit() {
  	}

  	openPhotoPostModal(id) {console.log(id);
    	//this.modal.openPhotoPostModal(id);
    	this.photoPostModalRef = this.modalService.open(PhotoPostViewerContentComponent, { windowClass:'open-post-modal', centered: true });
    	this.photoPostModalRef.componentInstance.name = id;
  	}
  	
}
