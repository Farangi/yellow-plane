import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class PageGuard implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
        this.userService.checkAccountType()
        .then(acctype => {
            if(acctype == 'Business') {
                return resolve(true);
            } else {
                return resolve(false);
            }
        })
        .catch(err => {
            return resolve(false);
        });
    });
  }
}