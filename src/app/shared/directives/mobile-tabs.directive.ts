import { Directive, ElementRef, HostListener, Host, HostBinding, Renderer2 } from '@angular/core';

/* @Directive({
  selector: '.mobile-tab-hidden'
})
export class ToggleHiddenMobileTabDirective {
  @HostBinding('class.active') private _addActive = false;

  toggleActive() {
    this._addActive = !this._addActive;
  }

} */

@Directive({
    selector: '.mobile-tab',
})
export class ToggleMobileTabDirective {

  constructor(
    private element: ElementRef, 
    private renderer: Renderer2, 
    //@Host() private _ToggleHiddenMobileTabDirective: ToggleHiddenMobileTabDirective 
    ) { }

  @HostListener('click', ['$event']) 
  onClick($event){
      if(this.element.nativeElement.classList.contains('active')){
        //const hiddenTab = this.renderer.selectRootElement('.mobile-tab');
        //console.log(hiddenTab);
        //return false;
        //this.renderer.addClass(hiddenTab.nativeElement, 'active');
        //this._ToggleHiddenMobileTabDirective.toggleActive();
        /* console.log(this.element);
        this.renderer.removeClass(this.element.nativeElement, "active");
        console.log(this.element.nativeElement); */
      }
  }
  
}