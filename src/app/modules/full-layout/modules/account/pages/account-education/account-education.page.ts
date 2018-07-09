import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-education',
  templateUrl: './account-education.page.html',
  styleUrls: ['./account-education.page.scss']
})
export class AccountEducationComponent implements OnInit {

  educations: any= [];
  employments: any= [];

  constructor() { }

  ngOnInit() {
    this.getEducationAndEmployment();
    //if(this.educations.length == 0){
      this.addEducation();
    //}

    //if(this.employments.length == 0){
      this.addEmployment();
    //}
  }

  getEducationAndEmployment(){
    this.educations.push({title:'The Step College of Design', time:'2011 - 2015', description:'Bachelor of Interactive Design in the New College. It was a five years intensive career. Average: A+'});
    this.educations.push({title:'Quaid E Azam Institute', time:'2016', description:'Five months Digital Illustration course. Professor: Ahmad Farooq.'});

    this.employments.push({title:'Digital Design Intern', time:'2016-2017', description:'Digital Design Intern for the “CGRC” agency. Was in charge of the communication with the clients.'});
    this.employments.push({title:'UI/UX Designer', time:'2017-current', description:'UI/UX Designer for the “Pyramid Solutions” agency.'});
  }

  addEducation(){
    this.educations.push({title:'', time:'', description:''});
  }

  addEmployment(){
    this.employments.push({title:'', time:'', description:''});
  }

}
