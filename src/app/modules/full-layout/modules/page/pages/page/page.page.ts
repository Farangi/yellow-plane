import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebaseUserModel } from '../../../../../../shared/models/user.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss']
})
export class PageComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;
  constructor(
    //public userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    });
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required]
    });
  }

  save(value) {
    // this.userService.updateCurrentUser(value)
    //   .then(res => {
    //     console.log(res);
    //   }, err => console.log(err));
  }

}