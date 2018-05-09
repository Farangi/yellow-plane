import { Directive, Host, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '.profile-settings-responsive'
})
export class AccountSettingsResponsiveDirective {
  @HostBinding('class.open') private _addOpen = false;

  toggleOpen() {
    this._addOpen = !this._addOpen;
  }

}

@Directive({
  selector: '.js-profile-settings-open'
})
export class AccountSettingsOpenDirective {

    constructor(@Host() private _AccountSettingsResponsiveDirective: AccountSettingsResponsiveDirective) { }

    @HostListener('click', ['$event']) onClick($event){
      this._AccountSettingsResponsiveDirective.toggleOpen();
  }

}
