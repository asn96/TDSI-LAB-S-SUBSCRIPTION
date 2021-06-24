import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {LoadingController} from "@ionic/angular";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public page = true;
  validations = {
    telephone_valid: [
      {type: 'required', message: 'Le Numéro est requis'},
      {type: 'pattern', message: 'Numéro non valide'},
      {type: 'maxLength', message: 'Numéro non valide'},
      {type: 'minLength', message: 'Numéro non valide'}
    ],
    password_valid: [
      {type: 'required', message: 'Le mot de passe est requis'},
      {type: 'pattern', message: 'mot de passe non valide'},
    ],
  };

  signInForm = this.formBuilder.group({
    telephone: new FormControl('', Validators.compose([
      Validators.maxLength(15),
      Validators.minLength(2),
      Validators.pattern('[0-9 ]*'),
      Validators.required
    ])),
    password: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder, public loadingController: LoadingController,
              private authService: AuthService) { }

  ngOnInit() {
    setTimeout(() => {
      this.page = false;
    }, 5000 );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Chargement...',
      duration: 3200,
      spinner: 'lines',
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  Onvalider() {
    this.authService.signInUser(this.signInForm.value);
    this.presentLoading().then(p => {
      this.signInForm.reset();
    });
  }

}
