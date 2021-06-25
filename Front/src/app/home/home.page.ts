import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from "@ionic/angular";
import {NouveauEtudiantComponent} from "../pages/etudiant/nouveau-etudiant/nouveau-etudiant.component";
import {NiveauService} from "../services/niveau/niveau.service";
import {ShareService} from "../services/share.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  segmentModel = 0;
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(public modalCtrl: ModalController, public niveauService: NiveauService,
              public shareService: ShareService) {}


  ngOnInit(): void {
    this.initData();
  }

  async segmentChanged($event: any) {
    await this.slides.getActiveIndex().then(index => {
      // console.log('index : ', index);
      // console.log('id slide selected :', this.slides[index]);
      // this.slides.slideTo(4);
      this.segmentChangedMe(index);
      document.getElementById('segment-' + index).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    });
  }

  segmentChangedMe(value) {
    this.segmentModel = value;
  }

  selectTab(i: number) {
    this.slides.slideTo(i).then(aa => {
    });
  }

  loadData($event: any) {
    this.initData();
    setTimeout(() => {
      // console.log("Done");
      $event.target.complete();
    }, 1000);
  }

  async slideChanged($event: any) {
    await this.slides.getActiveIndex().then(index => {
      // console.log('index : ', index);
      // console.log('id slide selected :', this.slides[index]);
      // this.slides.slideTo(4);
      this.segmentChangedMe(index);
      document.getElementById('segment-' + index).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    });
  }

  private initData() {
    this.niveauService.getAllNiveaux();
  }

  async addEtudiant() {
    const modal = await this.modalCtrl.create({
      component: NouveauEtudiantComponent
    });

    return await modal.present();

  }

  deconnexion() {
    // console.log('deconnexion');
    localStorage.clear();
    this.shareService.router.navigate(['auth/']).then(r => {
      console.log('deconnexion: ');
    });

  }
}
