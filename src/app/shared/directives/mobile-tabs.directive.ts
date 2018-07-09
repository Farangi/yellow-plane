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
  onClick($event){//console.log(this.element);
      if(this.element.nativeElement.classList.contains('active')){
        //const hiddenTab = this.renderer.selectRootElement('.hidden-tab');
        //hiddenTab.click();
        //console.log(hiddenTab);
        //console.log(this.element.nativeElement);
        //this.renderer.removeClass(this.element.nativeElement, 'abc');
        //this.renderer.removeClass(this.element.nativeElement, 'show');
        //this.renderer.removeClass(this.element.nativeElement, 'active');
        //return false;
        //this._ToggleHiddenMobileTabDirective.toggleActive();
        /* console.log(this.element);
        this.renderer.removeClass(this.element.nativeElement, "active");
        console.log(this.element.nativeElement); */
      }
/*       else {
        this.renderer.addClass(this.element.nativeElement, 'abc');
        console.log(this.element.nativeElement);
      } */
  }
  
}