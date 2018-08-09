import { PhotoService } from "./../../../../../../shared/services/photos.service";
import { PostService } from "./../../../../../../shared/services/posts.service";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ReadFile } from "ngx-file-helpers";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.page.html",
  styleUrls: ["./news-feed.page.scss"]
})
export class NewsFeedComponent implements OnInit {
  public picked: ReadFile;
  pickedPhotos: any = [];
  postPhotoModal: any;
  chooseFromPcModal: any;

  post: any;

  privacyOptions = [
    { name: "Everyone", value: "EVERYONE", icon: "fa-globe" },
    { name: "Friends", value: "FRIENDS", icon: "fa-users" },
    { name: "Only me", value: "ONLYME", icon: "fa-lock" }
  ];
  privacy = this.privacyOptions[0].value;

  constructor(
    private modalService: NgbModal,
    private postService: PostService,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.post = {};
  }

  onFilePicked(file: ReadFile) {
    this.picked = file;
    this.chooseFromPcModal.close();
  }

  openPostPhoto(content) {
    this.postPhotoModal = this.modalService.open(content, {
      size: "lg",
      centered: true
    });
    this.postPhotoModal.result.then(
      result => {
        console.log(`Closed with: ${result}`);
      },
      reason => {
        console.log(`Dismissed ${reason}`);
      }
    );
  }

  openChooseFromPc(content) {
    this.postPhotoModal.close();
    this.chooseFromPcModal = this.modalService.open(content, {
      size: "lg",
      centered: true
    });
  }

  postStatus() {
    if (this.post.caption) {
      this.post.privacy = this.privacy;
      this.post.type = "STATUS";
      this.post.time = new Date().toLocaleTimeString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      this.postService
        .submitPost(this.post)
        .then(res => {
          this.post = {};
        })
        .catch(err => console.log(err));
    }
  }

  postPhotoStatus() {
    if (this.post.caption) {
      this.post.privacy = this.privacy;
      this.post.type = "PHOTO";
      this.post.time = new Date().toLocaleTimeString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      this.pickedPhotos.push(this.picked);
      this.photoService
        .uploadPhotosStatus({
          description: this.post.caption,
          privacy: this.post.privacy,
          photos: this.pickedPhotos
        })
        .then(uploadId => {
          this.post.uploadId = uploadId;
          this.postService
            .submitPost(this.post)
            .then(res => {
              this.post = {};
              this.picked = null;
              this.pickedPhotos = [];
            })
            .catch(err => console.log(err));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
