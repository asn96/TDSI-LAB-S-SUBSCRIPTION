import { Injectable } from '@angular/core';
import {GenericService} from "../generic.service";
import {ShareService} from "../share.service";

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  public list_niveaux: any = [];

  constructor(private genericService: GenericService, private shareService: ShareService) { }

  getAllNiveaux() {
    this.list_niveaux = [];
    this.genericService.getElements('getAllNiveau').subscribe(response => {
      this.list_niveaux = response['niveaux'];
      // console.log('niveaux : ', this.list_niveaux);
    }, error => {
      this.shareService.presentToast('erreur lors du chargement', 'danger').then(r => {});
    });
  }
}
