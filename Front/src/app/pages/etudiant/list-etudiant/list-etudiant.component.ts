import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss'],
})
export class ListEtudiantComponent implements OnInit {

  @Input() list_etudiants: any;

  constructor() { }

  ngOnInit() {}

  voirDetail(etudiant: any) {

  }

  getSexe(etudiant: any) {
    let sexe = ['secondary', 'F']
    if (etudiant.sexe) {
      sexe = ['primary', 'M']
    }

    return sexe;
  }
}
