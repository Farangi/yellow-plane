import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable()
export class HomeGuard implements CanActivate {

    constructor(
        public userService: UserService,
        private router: Router
    ) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(user => {
                    this.router.navigate(['/home']);
                    return resolve(false);
                }, err => {
                    return resolve(true);
                });
        });
    }
}
