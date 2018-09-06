import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CircleService } from '../../../../../../shared/services/circles.service';

@Component({
  selector: 'app-circle-create-circle',
  templateUrl: './circle-create-circle.page.html',
  styleUrls: ['./circle-create-circle.page.scss']
})
export class CircleCreateCircleComponent implements OnInit {

  createForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private circleService: CircleService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      title: ['The Community', Validators.compose([Validators.required])],
      description: ['Talk about dinner parties, reunions and more!', Validators.compose([Validators.required])],
    });
  }

  create() {
    if(this.createForm.valid) {
      //console.log(this.createForm.value);
      this.circleService.submitCircle(this.createForm.value)
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
