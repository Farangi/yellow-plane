import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '../../../../../../../../node_modules/@angular/router';
import { CircleService } from '../../../../../../shared/services/circles.service';

@Component({
  selector: 'app-circle-create-topic',
  templateUrl: './circle-create-topic.page.html',
  styleUrls: ['./circle-create-topic.page.scss']
})
export class CircleCreateTopicComponent implements OnInit {

  createForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private circleService: CircleService) {

    }

  ngOnInit() {
    console.log("circcle : "  + this.route.snapshot.parent.params['id']);
    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      title: ['New York Comix Con is having the best panels this year!', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', Validators.compose([Validators.required])],
    });
  }

  create() {
    if(this.createForm.valid) {
      this.circleService.submitTopic(this.createForm.value, this.route.snapshot.parent.params['id'])
      .then(res => {
        console.log(res);
        this.location.back();
      })
      .catch(err => console.log(err));
    }
  }

  cancel() {
    this.location.back();
  }
}
