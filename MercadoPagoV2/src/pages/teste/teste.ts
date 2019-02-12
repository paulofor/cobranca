import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var Mercadopago: any;


/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
    this.testeItem();
  }


  testeItem() {
    Mercadopago.clearSession();
    Mercadopago.setPublishableKey("APP_USR-f9c3c300-bab0-4ae0-b5a5-e6c68f7d5b46");
    Mercadopago.createToken({
      "cardNumber" : '4012001037141112',
      "securityCode" : '123' ,
      "cardExpirationMonth" : '12' ,
      "cardExpirationYear" : '22',
      "cardholderName" : 'XXXX XXXX XXXXX',
      "docType": 'CPF',
      "docNumber": '01114740780',
      "installments": 1
    }, this.sdkResponseHandler.bind(this));
    console.log('Mercadopago: ' , Mercadopago);
  }

  sdkResponseHandler(valor, valor2) {
    console.log('acessou response' , valor);
    console.log('param2' , valor2);
  }
}
