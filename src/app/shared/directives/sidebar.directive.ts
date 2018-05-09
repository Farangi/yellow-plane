import { Directive, Host, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '.fixed-sidebar'
})
export class FixedSidebarDirective {
  @HostBinding('class.open') private _addOpen = false;

  toggleOpen() {
    this._addOpen = !this._addOpen;
  }

}

@Directive({
  selector: '.js-sidebar-open'
})
export class SidebarOpenDirective {

  	constructor(@Host() private _FixedSidebarDirective: FixedSidebarDirective) { }

  	@HostListener('click', ['$event']) onClick($event){
	    this._FixedSidebarDirective.toggleOpen();
	}

	// if(this.el.nativeElement.classList.contains('active')){
	// 	console.log(this.el);console.log(this.el.nativeElement.hash);
	// 	this.renderer.setElementClass(this.el.nativeElement, 'active', false);

	// 	let connectedTabPane = this.el.nativeElement.querySelector(this.el.nativeElement.hash);
	// 	console.log(connectedTabPane);
	// }

}
