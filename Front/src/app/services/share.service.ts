import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private toastController: ToastController, public router: Router) { }

  async presentToast(mess, color) {
    const toast = await this.toastController.create({
      color: color,
      message: mess,
      duration: 1000,
    });
    await toast.present();
  }
}
