import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-photo-post-viewer-content',
  templateUrl: './photo-post-viewer-content.component.html',
  styleUrls: ['./photo-post-viewer-content.component.scss']
})
export class PhotoPostViewerContentComponent implements OnInit {
	@ViewChild('photoSwiper') directiveRef?: SwiperDirective;
	@Input() id;

	private photoPostModalRef: any ;
	swiperConfig: SwiperConfigInterface = {pagination: false};

	posts: any = [];
  	
  	constructor( ) { }

  	ngOnInit() {
  		this.posts.push(this.getPostData(this.id));
  	}

  	private getPostData(id){
  		let post = {id:this.posts.length, by:'Hassan Ahmad', time:'2 hours ago', type:'PHOTO', postAlbumName:'Photoshoot Summer',
  					 postAlbumTime:'3 weeks ago', content:'/assets/img/open-photo2.jpg',
  					 text:'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
  					 counts:{likes:125, comments:61, shares:25}, 
  					 comments:[{by:'Maria Ahmad', userImg:'/assets/img/avatar48-sm.jpg', text:'I had a great time too!! We should do it again!', likes:8, time:'46 mins ago'},
  					 		  {by:'Wakas Ali', userImg:'/assets/img/avatar4-sm.jpg', text:'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.', likes:4, time:'1 hour ago'}],
  					 nextPostId:5
  					};
  		return post;
  	}

 //  	private openPostModal(){
 //  		this.photoPostModalRef = this.modalService.open(PhotoPostViewerContentComponent, { windowClass:'open-post-modal', centered: true });

	//     this.photoPostModalRef.result.then((result) => {
	//       console.log(`Closed with: ${result}`);
	//     }, 
	//     (reason) => {
	//       console.log(`Dismissed ${reason}`);
	//     });
 //  	}

 //  	public openPhotoPostModal(id) {
	// 	this.posts.push(this.getPostData(id));
	// 	this.openPostModal();
	// }

	getNextPost(id){
		let post = this.getPostData(id);
		post.by = 'Ahsan Ali';
		this.posts.push(post);
		console.log(this.directiveRef);
		this.directiveRef.nextSlide();
	}

}
