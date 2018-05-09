import { NgModule } from '@angular/core';
import { ClickStopPropagation } from './prevent-anchor-click.directive';
import { DatepickerDirective } from './date-picker.directive';
import { FixedSidebarDirective } from './sidebar.directive';
import { SidebarOpenDirective } from './sidebar.directive';
import { AccountSettingsResponsiveDirective } from './account-settings.directive';
import { AccountSettingsOpenDirective } from './account-settings.directive';

@NgModule({
  declarations: [
    ClickStopPropagation,
    DatepickerDirective,
  	FixedSidebarDirective,
  	SidebarOpenDirective,
    AccountSettingsResponsiveDirective,
    AccountSettingsOpenDirective
  ],
  exports: [
    ClickStopPropagation,
    DatepickerDirective,
  	FixedSidebarDirective,
  	SidebarOpenDirective,
    AccountSettingsResponsiveDirective,
    AccountSettingsOpenDirective
  ],
})
export class DirectivesModule { }
