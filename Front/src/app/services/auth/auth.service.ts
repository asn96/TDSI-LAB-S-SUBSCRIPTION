import { Injectable } from '@angular/core';
import {GenericService} from "../generic.service";
import {ShareService} from "../share.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // jwtHelper: JwtHelper = new JwtHelper();

  constructor(private genericService: GenericService, private shareService: ShareService) { }

  signInUser(user: any) {
    this.genericService.createElementWOT('signin', user).subscribe(response => {
      // const data = this.jwtHelper.decodeToken(response['token']);
      // console.log(response);
      localStorage.setItem('token', response['token']);
      setTimeout(() => {
        this.shareService.router.navigate(['home/']).then(r => {});
      }, 3000);

    }, error => {
      // console.log('error: ', error);
      const mess = error['error']['message'];
      this.shareService.presentToast(mess, 'danger').then(r => {
        // console.log('OK');
      });
    });
  }
}
