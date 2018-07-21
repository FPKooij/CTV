import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-updates',
  templateUrl: 'updates.html'
})
export class UpdatesPage {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alerCtrl: AlertController) {}

  ConfirmAttendee(){
    let confirm = this.alerCtrl.create({
      title : 'Deelnamen:',
      message: 'Wil je toch meedoen met de bijbehorende training?',
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

  // constructor(public navCtrl: NavController) {}
  ConfirmDecline() {
    let confirm = this.alerCtrl.create({
      title : 'Deelnamen:',
      message: 'Wil je toch niet meedoen met de bijbehorende training?',
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

}