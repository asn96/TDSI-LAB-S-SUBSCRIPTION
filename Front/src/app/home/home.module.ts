import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ListEtudiantComponent} from "../pages/etudiant/list-etudiant/list-etudiant.component";
import {NiveauService} from "../services/niveau/niveau.service";
import {NouveauEtudiantComponent} from "../pages/etudiant/nouveau-etudiant/nouveau-etudiant.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
    declarations: [HomePage, ListEtudiantComponent, NouveauEtudiantComponent],
  entryComponents: [NouveauEtudiantComponent]
})
export class HomePageModule {}
