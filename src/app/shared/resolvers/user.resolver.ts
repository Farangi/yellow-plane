import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class UserResolver implements Resolve<UserData> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<UserData> {

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData()
        .then((user: UserData) => {
          resolve(user);
        }, err => {
          this.router.navigate(['/auth']);
          return reject(err);
        });
    });
  }
}
