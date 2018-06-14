import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-circle-create-topic',
  templateUrl: './circle-create-topic.page.html',
  styleUrls: ['./circle-create-topic.page.scss']
})
export class CircleCreateTopicComponent implements OnInit {

  createForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      title: ['New York Comix Con is having the best panels this year!', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      subCategory: ['', Validators.compose([Validators.required])],
      description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', Validators.compose([Validators.required])],
    });
  }
  
  create(value) {

  }

}
