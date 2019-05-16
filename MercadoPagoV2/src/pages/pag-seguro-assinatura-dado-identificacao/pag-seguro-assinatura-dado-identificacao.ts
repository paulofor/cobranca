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

  dataNascimento = "";

  sender = {
    "name": "",
    "email": "",

    "hash" : "",
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

  avancar() {
    Assinatura.paymentMethod.creditCard.holder.birthDate = this.dataNascimento;
    console.log('PagSeguroAssinaturaDadoIdentificacaoPage:Assinatura: ' , Assinatura);
    this.navCtrl.push(PagSeguroAssinaturaDadoClientePage);
  }

  preenhcer() {
    this.sender.name = 'Paulo Alexandre';
    this.sender.email = 'paulofore@gmail.com';
    this.sender.phone.areaCode = '21';
    this.sender.phone.number = '992902732';
    this.sender.documents[0].value = '01114740780'
  }

}
