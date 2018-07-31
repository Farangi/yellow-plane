import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {

  chats:any = [];

  constructor() { }

  ngOnInit() {
    this.getChats();
  }

  getChats(){
    this.chats.push({img:'/assets/img/avatar67-sm.jpg', name: 'Maryam Ali', status:'online'});
    this.chats.push({img:'/assets/img/avatar62-sm.jpg', name: 'Neelam Muneer', status:'status-invisible'});
    this.chats.push({img:'/assets/img/avatar68-sm.jpg', name: 'Haider Ali', status:'online'});
    this.chats.push({img:'/assets/img/avatar69-sm.jpg', name: 'Neem Akram', status:'away'});
    this.chats.push({img:'/assets/img/avatar70-sm.jpg', name: 'Huma Khan', status:'online'});
    this.chats.push({img:'/assets/img/avatar71-sm.jpg', name: 'Ikhlaq Ahmad', status:'away'});
    this.chats.push({img:'/assets/img/avatar72-sm.jpg', name: 'Zeeshan Khan', status:'status-invisible'});
    this.chats.push({img:'/assets/img/avatar63-sm.jpg', name: 'Mustafa Ali', status:'away'});
    this.chats.push({img:'/assets/img/avatar60-sm.jpg', name: 'Waqar Ahsan', status:'online'});
    this.chats.push({img:'/assets/img/avatar56-sm.jpg', name: 'Umar Kamboh', status:'disconnected'});
  }

}
