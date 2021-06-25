import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController} from "@ionic/angular";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {EtudiantService} from "../../../services/etudiant/etudiant.service";
import {NiveauService} from "../../../services/niveau/niveau.service";

@Component({
  selector: 'app-nouveau-etudiant',
  templateUrl: './nouveau-etudiant.component.html',
  styleUrls: ['./nouveau-etudiant.component.scss'],
})
export class NouveauEtudiantComponent implements OnInit {

  etudiantForm = this.formBuilder.group({
    nomComplet: new FormControl('', Validators.compose([
      Validators.maxLength(50),
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required
    ])),
    email: new FormControl('', Validators.compose([
      Validators.maxLength(40),
      Validators.minLength(2),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required
    ])),
    telephone: new FormControl( '', Validators.compose([
      Validators.maxLength(10),
      Validators.minLength(3),
      Validators.pattern('[0-9]*'),
      Validators.required
    ])),
    sexe: new FormControl('', Validators.compose([
      Validators.required
    ])),
    adresse: new FormControl('', Validators.compose([
      Validators.pattern('[a-z0-9A-Z ]*')
    ])),
    userid: 1,
    niveauid: new FormControl('', Validators.compose([
      Validators.required
    ]))
    // restaurantid: +localStorage.getItem('restoId'),
  });

  validations = {
    nomComplet_valid: [
      {type: 'required', message: 'Le nom est obligatoire'},
      {type: 'pattern', message: 'Nom invalide'}
    ],
    email_valid: [
      {type: 'required', message: 'Email obligatoire'},
      {type: 'pattern', message: 'Email invalide'}
    ],
    telephone: [
      { type: 'required', message: 'Le téléphone est obligatoire' },
      { type: 'pattern', message: 'téléphone invalide'}
    ],
    adresse: [
      { type: 'pattern', message: 'Adresse invalide'}
    ],
    sexe: [
      { type: 'required', message: 'Sexe obligatoire' }
    ],
    niveauid: [
      { type: 'required', message: 'Niveau obligatoire' }
    ],
  };

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder,
              private etudiantService: EtudiantService, public niveauService: NiveauService,
              private loadingController: LoadingController) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  createEtudiant() {
    console.log(this.etudiantForm.value);
    this.etudiantService.createEtudiant(this.etudiantForm.value);
    this.presentLoading().then(p => {
      this.niveauService.getAllNiveaux();
      this.closeModal();
    });

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Patienter...',
      duration: 3000,
      spinner: "bubbles",
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
}
