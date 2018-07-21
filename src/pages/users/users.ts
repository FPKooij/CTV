import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alerCtrl: AlertController) {}

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

}
