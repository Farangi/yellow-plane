import { NgModule } from '@angular/core';
import { FileHelpersModule } from 'ngx-file-helpers';

@NgModule({
  imports: [
    FileHelpersModule,
  ],
  exports: [
    FileHelpersModule,
  ],
})
export class FilePickerModules { }
