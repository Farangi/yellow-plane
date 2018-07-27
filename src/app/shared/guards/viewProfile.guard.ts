import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class ViewProfileGuard implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUserData()
      .then((user:UserData) => {
        if (route.parent.params['username'] == user.username) {
          resolve(true);
        } else {
          this.userService.checkRelation(user.username, route.parent.params['username'])
          .subscribe((relations: any[]) => {
            if(relations.length) {
              if(relations[0].status == 'accepted') {
                resolve(true);
              } else {
                this.router.navigate(['profile', route.parent.params['username'], 'about']);
                resolve(false);
              }
            } else {
              this.userService.checkRelation(route.parent.params['username'], user.username)
              .subscribe((relations: any[]) => {
                if(relations.length) {
                  if(relations[0].status == 'accepted') {
                    resolve(true);
                  } else {
                    this.router.navigate(['profile', route.parent.params['username'], 'about']);
                    resolve(false);
                  }
                }
              });
            }
          });
        }
      }).catch(err => reject(err));
    });
  }
}
