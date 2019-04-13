import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura } from '../../app/shared/assinatura';
import { PagSeguroAssinaturaDadoCartaoPage } from '../pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';

/**
 * Generated class for the PagSeguroAssinaturaDadoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-cliente',
  templateUrl: 'pag-seguro-assinatura-dado-cliente.html',
})
export class PagSeguroAssinaturaDadoClientePage {


  address = {
    "street": "",
    "number": "",
    "complement": "",
    "district": "",
    "city": "",
    "state": "",
    "country": "BRA",
    "postalCode": ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Assinatura:', Assinatura.sender.address.street);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoClientePage');
    this.address = Assinatura.sender.address;
  }


  logForm() {
    //console.log('Antes ' + JSON.stringify(Assinatura));
    //Assinatura.sender.address = this.address;
    //console.log('Depois ' + JSON.stringify(Assinatura));
  }

  avancar() {
    this.navCtrl.push(PagSeguroAssinaturaDadoCartaoPage);
  }
  voltar() {
    this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
  }

}
