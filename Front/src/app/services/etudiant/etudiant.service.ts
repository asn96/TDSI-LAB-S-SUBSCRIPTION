import { Injectable } from '@angular/core';
import {GenericService} from "../generic.service";
import {ShareService} from "../share.service";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private genericService: GenericService, private shareService: ShareService) { }

  createEtudiant(etudiant) {
    this.genericService.createElement('createEtudiant', etudiant).subscribe(response => {
        // console.log(' Etudiant created : ', response['etudiant']);
    },
      error => {
        this.shareService.presentToast('erreur lors du chargement', 'danger').then(r => {});
      })
  }
}
