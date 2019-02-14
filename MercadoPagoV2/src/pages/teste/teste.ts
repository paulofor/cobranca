import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MercadoPagoApi } from '../../app/shared/sdk/index';

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

  valorId:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private srv: MercadoPagoApi) {
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
    console.log('token:' , valor2);
    console.log('ID:' , valor2.id);
    this.valorId = valor2.id;
  }

  enviar() {
    console.log('Pediu para enviar');
    this.srv.EfetuaCompra(this.valorId)
      .subscribe((res) => {
        console.log('Resultado: ' , res);
      });
  }
}
