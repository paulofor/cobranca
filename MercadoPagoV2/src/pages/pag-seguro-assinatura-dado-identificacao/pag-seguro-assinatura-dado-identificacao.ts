import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura } from '../../app/shared/assinatura';
import { PagSeguroAssinaturaDadoClientePage } from '../pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente';

/**
 * Generated class for the PagSeguroAssinaturaDadoIdentificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-identificacao',
  templateUrl: 'pag-seguro-assinatura-dado-identificacao.html',
})
export class PagSeguroAssinaturaDadoIdentificacaoPage {

  sender = {
    "name": "",
    "email": "",
    "ip": "",
    "phone": {
      "areaCode": "",
      "number": ""
    },
    "address": {
      "street": "",
      "number": "",
      "complement": "",
      "district": "",
      "city": "",
      "state": "",
      "country": "BRA",
      "postalCode": ""
    },
    "documents": [
      {
        "type": "CPF",
        "value": ""
      }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoIdentificacaoPage');
    this.sender = Assinatura.sender;
  }

  logForm() {
    console.log('Antes ' + JSON.stringify(Assinatura));
    Assinatura.sender = this.sender;
    console.log('Depois ' + JSON.stringify(Assinatura));
  }

  avancar() {
    this.navCtrl.push(PagSeguroAssinaturaDadoClientePage);
  }

}
