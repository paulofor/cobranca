import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    "name" : "",
    "email" : "",
    "ip" : "",
    "phone" : {
      "areaCode" : "",
      "number" : ""
    } ,
    "documents" : [
      {
      "type" : "CPF",
      "value" : ""
      }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoIdentificacaoPage');
  }

  logForm() {
    console.log(this.sender);
  }

}
