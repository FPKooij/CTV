import { Component } from '@angular/core';
import { AlertController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {
  constructor(public modalCtrl: ModalController) { }
  
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}

@Component({
  template: `

<ion-header>
  <ion-toolbar color="ctv">
    <ion-title text-center>
    {{sessions.title}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>

    <h1 text-center>Deelnemers</h1>

    <ion-list>

      <ion-item *ngFor="let item of sessions['items']">
      <ion-avatar item-start>
      <img src="{{item.profile}}">
        </ion-avatar>
        <ion-label>            
          <h2>Naam : {{item.name}}</h2>
          <p>Credits : {{item.credits}}</p>   
        </ion-label>
        <ion-checkbox color="primary" checked="true" item-end></ion-checkbox>
      </ion-item>

  </ion-list>

  <ion-content text-center>
    <button ion-button color="primary" block (click)="doConfirm()">Confirmatie : Credits</button>
  </ion-content>


</ion-content>
`
})

export class ModalContentPage {

  sessions;
  testRadioOpen: boolean;
  testRadioResult;

  constructor(
    public platform: Platform,
    public alerCtrl: AlertController,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var sessions = [
      {
        title: 'CTV Bootcamp Session 1',
        day: 'Maandagavond',
        date : '25-6-2018',
        image: 'assets/imgs/Training_1_Bootcamp.jpg',
        items: [
          { name: 'Floris Kooij', profile: 'assets/imgs/Floris_Kooij.jpg', credits: '10', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
          { name: 'Nick Lamers', profile: 'assets/imgs/Nick_Lamers.jpg', credits: '2', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
          { name: 'Maik van Lieshout', profile: 'assets/imgs/Maik_Lieshout.jpg', credits: '5', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
          { name: 'Coen poot', profile: 'assets/imgs/Coen_Poot.jpg', credits: '0' },
        ]
      },
      {
        title: 'CTV Bootcamp Session 2',
        date: '02-07-2018',
        day: 'Maandagavond',
        image: 'assets/imgs/Training_2_Bootcamp.jpg',
        items: [
          { name: 'Floris Kooij', profile: 'assets/imgs/Floris_Kooij.jpg', credits: '10', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
          { name: 'Nick Lamers', profile: 'assets/imgs/Nick_Lamers.jpg', credits: '2', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
          { name: 'Maik van Lieshout', profile: 'assets/imgs/Maik_Lieshout.jpg', credits: '5', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
          { name: 'Coen poot', profile: 'assets/imgs/Coen_Poot.jpg', credits: '0', checkboxuser: '<ion-checkbox color="dark" checked="true" item-end></ion-checkbox>' },
        ]
      }
    ];
    this.sessions = sessions[this.params.get('charNum')];
  }

  // constructor(public navCtrl: NavController) {}
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title : 'Credits Reductie!',
      message: 'Zijn dit de deelnemers van de huidige training?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}


