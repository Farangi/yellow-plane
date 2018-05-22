import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
 
@Injectable()
export class ScrollService {
 
  constructor(private scrollToService: ScrollToService) { }
 
  public triggerScrollTo(_target, _offset) {
    
    const config: ScrollToConfigOptions = {
      target: _target,
      offset: _offset,
      duration: 1000
    };
 
    this.scrollToService.scrollTo(config);
  }
}