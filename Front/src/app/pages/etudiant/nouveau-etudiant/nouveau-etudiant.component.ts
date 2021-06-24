import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-nouveau-etudiant',
  templateUrl: './nouveau-etudiant.component.html',
  styleUrls: ['./nouveau-etudiant.component.scss'],
})
export class NouveauEtudiantComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
