import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class ProfileResolver implements Resolve<any> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByUsername(route.params['username'])
      .then((person:UserData) => {
        return resolve(person);
      }).catch(err => {return reject(err)});
    });
  }
}
