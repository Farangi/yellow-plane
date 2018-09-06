import { UserService } from "../../../../../../shared/services/user.service";
import { PhotoService } from "../../../../../../shared/services/photos.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ScrollService } from "../../../../../../shared/services/scroll.service";
import { FilePickerDirective, ReadFile } from "ngx-file-helpers";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.page.html",
  styleUrls: ["./photos.page.scss"]
})
export class PhotosComponent implements OnInit {
  @ViewChild("photoPostVewerComp") photoPostVewerComp;
  @ViewChild("addPhoto") addPhotoModal;
  @ViewChild("addAlbum") addAlbumModal;
  @ViewChild("albumTop") albumTop;
  @ViewChild(FilePickerDirective) private filePicker;

  privacyOptions = [
    { name: "Everyone", value: "EVERYONE", icon: "fa-globe" },
    { name: "Friends", value: "FRIENDS", icon: "fa-users" },
    { name: "Only me", value: "ONLYME", icon: "fa-lock" }
  ];
  //Photos Tab
  photos: any = [];

  //Albums Tab
  albums: any = [];
  selectedAlbumId: any = 0;
  selectedAlbumPhotos: any = [];

  //Upload photo modal helpers
  private addPhotoModalRef: any;
  private addPhotoModalRefOpen: boolean = false;
  addPhotoModalForm: any = {};
  pickedPhotos: any = [];

  //Create album modal helpers
  private addAlbumModalRef: any;
  private addAlbumModalRefOpen: boolean = false;
  addAlbumModalForm: any = {};
  pickedAlbumPhotos: any = [];
  showPhotoControls: boolean;

  constructor(
    private modalService: NgbModal,
    public scrollService: ScrollService,
    private photoServ: PhotoService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.addPhotoModalForm.privacy = this.privacyOptions[0].value;
    this.addAlbumModalForm.privacy = this.privacyOptions[0].value;
  }

  ngOnInit() {
    const username = this.route.snapshot.parent.params["username"];
    this.userService
      .getCurrentUserData()
      .then((user: UserData) => {
        if (user.username == username) {
          this.showPhotoControls = true;
        } else {
          this.showPhotoControls = false;
        }
      })
      .catch(err => console.log(err));
    this.getPhotos();
    this.getAlbums();
  }

  //Photos Tab

  private getPhotos() {
    this.photos = [];
    this.photoServ
      .getCurrentUserPhotos()
      .then((uploads: any = []) => {
        uploads.forEach(upload => {
          let photoId = 1;
          upload.photos.forEach(photo => {
            this.photos.push({
              id: photoId,
              img: photo.photoUrl,
              likes: 15,
              albumName: upload.description,
              time: photo.uploadedAt
            });
            photoId++;
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getMorePhotos() {
    this.getPhotos();
  }

  //Albums Tab

  private getAlbums() {
    this.albums.push({
      id: 1,
      name: "South America Vacations",
      lastAdded: "2 hours ago",
      coverImg: "/assets/img/photo-item2.jpg",
      likes: 324,
      counts: { photos: 240, comments: 52, share: 16 },
      likedBy: [
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic8.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
      ]
    });
    this.albums.push({
      id: 2,
      name: "Photoshoot Summer",
      lastAdded: "5 weeks ago",
      coverImg: "/assets/img/photo-album1.jpg",
      likes: 324,
      counts: { photos: 24, comments: 86, share: 16 },
      likedBy: [
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic8.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
      ]
    });
    this.albums.push({
      id: 3,
      name: "Amazing Street Food",
      lastAdded: "6 mins ago",
      coverImg: "/assets/img/photo-album2.jpg",
      likes: 324,
      counts: { photos: 24, comments: 86, share: 16 },
      likedBy: [{ name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" }]
    });
    this.albums.push({
      id: 4,
      name: "Graffiti and Street Art",
      lastAdded: "6 hours ago",
      coverImg: "/assets/img/photo-album3.jpg",
      likes: 324,
      counts: { photos: 24, comments: 86, share: 16 },
      likedBy: [
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
      ]
    });
    this.albums.push({
      id: 5,
      name: "Amazing Landscapes",
      lastAdded: "13 mins ago",
      coverImg: "/assets/img/photo-album4.jpg",
      likes: 324,
      counts: { photos: 24, comments: 86, share: 16 },
      likedBy: [
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic10.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
      ]
    });
    this.albums.push({
      id: 6,
      name: "The Majstic Canyon",
      lastAdded: "57 mins ago",
      coverImg: "/assets/img/photo-item6.jpg",
      likes: 324,
      counts: { photos: 24, comments: 86, share: 16 },
      likedBy: [{ name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }]
    });
    this.albums.push({
      id: 7,
      name: "Winter 2015 Portraits",
      lastAdded: "1 year ago",
      coverImg: "/assets/img/photo-album5.jpg",
      likes: 324,
      counts: { photos: 24, comments: 86, share: 16 },
      likedBy: [
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic5.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic7.jpg" },
        { name: "Wakas Ali", img: "/assets/img/friend-harmonic2.jpg" }
      ]
    });
  }

  getMoreAlbums() {
    this.getAlbums();
  }

  private getAlbumPhotos(id) {
    this.selectedAlbumPhotos.push({
      id: 9,
      img: "/assets/img/photo-item7.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 10,
      img: "/assets/img/photo-item9.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 11,
      img: "/assets/img/photo-item3.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 12,
      img: "/assets/img/photo-item10.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 13,
      img: "/assets/img/photo-item5.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 14,
      img: "/assets/img/photo-item11.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 15,
      img: "/assets/img/photo-item7.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
    this.selectedAlbumPhotos.push({
      id: 16,
      img: "/assets/img/photo-item8.jpg",
      likes: 15,
      albumName: "Header Photos",
      time: "1 week ago"
    });
  }

  getMoreAlbumPhotos() {
    this.getAlbumPhotos(this.selectedAlbumId);
  }

  showAlbum(id) {
    this.selectedAlbumPhotos = [];
    this.selectedAlbumId = id;
    this.getAlbumPhotos(id);
    this.scrollService.triggerScrollTo(this.albumTop.nativeElement.id, 0);
  }

  //View Post Modal

  showPhotoPost(id) {
    this.photoPostVewerComp.openPhotoPostModal(id);
  }

  //Upload Photo Modal

  onFilePicked(file: ReadFile) {
    this.pickedPhotos.push(file);
    if (this.pickedPhotos.length == 1 && !this.addPhotoModalRefOpen) {
      this.openPhotoUploadModal();
    }
  }

  private openPhotoUploadModal() {
    this.addPhotoModalRef = this.modalService.open(this.addPhotoModal, {
      backdrop: "static",
      centered: true
    });
    this.addPhotoModalRefOpen = true;

    this.addPhotoModalRef.result.then(
      result => {
        console.log(`Closed with: ${result}`);
        this.pickedPhotos = [];
        this.addPhotoModalRefOpen = false;
        this.filePicker.reset();
      },
      reason => {
        console.log(`Dismissed ${reason}`);
        this.pickedPhotos = [];
        this.addPhotoModalRefOpen = false;
        this.filePicker.reset();
      }
    );
  }

  removePhoto(index) {
    this.pickedPhotos.splice(index, 1);
  }

  postPhotos() {
    this.addPhotoModalRef.close();
    this.photoServ
      .uploadPhotos({
        description: this.addPhotoModalForm.description,
        privacy: this.addPhotoModalForm.privacy,
        photos: this.pickedPhotos
      })
      .then(resp => {
        //console.log(resp);
        this.getPhotos();
      })
      .catch(err => {
        console.log(err);
      });
  }

  //Create Album Modal

  onAlbumFilePicked(file) {
    this.pickedAlbumPhotos.push(file);
    if (this.pickedAlbumPhotos.length == 1 && !this.addAlbumModalRefOpen) {
      this.openAlbumUploadModal();
    }
  }

  private openAlbumUploadModal() {
    this.addAlbumModalRef = this.modalService.open(this.addAlbumModal, {
      backdrop: "static",
      size: "lg",
      windowClass: "create-album-modal",
      centered: true
    });
    this.addAlbumModalRefOpen = true;

    this.addAlbumModalRef.result.then(
      result => {
        console.log(`Closed with: ${result}`);
        this.pickedAlbumPhotos = [];
        this.addAlbumModalRefOpen = false;
        this.filePicker.reset();
      },
      reason => {
        console.log(`Dismissed ${reason}`);
        this.pickedAlbumPhotos = [];
        this.addAlbumModalRefOpen = false;
        this.filePicker.reset();
      }
    );
  }

  removeAlbumPhoto(index) {
    this.pickedAlbumPhotos.splice(index, 1);
  }

  postAlbum() {
    console.log(this.addAlbumModalForm);
    console.log(this.pickedAlbumPhotos);
    this.addAlbumModalRef.close();
  }
}
