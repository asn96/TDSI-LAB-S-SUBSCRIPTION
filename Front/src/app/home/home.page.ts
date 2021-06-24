import {Component, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from "@ionic/angular";
import {NouveauEtudiantComponent} from "../pages/etudiant/nouveau-etudiant/nouveau-etudiant.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentModel = 0;
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(public modalCtrl: ModalController) {}

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

  }

  async addEtudiant() {
    const modal = await this.modalCtrl.create({
      component: NouveauEtudiantComponent
    });

    return await modal.present();

  }
}
