import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assinatura } from '../../app/shared/assinatura';

/**
 * Generated class for the PagSeguroAssinaturaDadoCartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-assinatura-dado-cartao',
  templateUrl: 'pag-seguro-assinatura-dado-cartao.html',
})
export class PagSeguroAssinaturaDadoCartaoPage {


  cartao = {
    "nome" : "",
    "bandeira" : "",
    "numero" : "",
    "anoExpira" : "",
    "mesExpira" : "" ,
    "verificador" : ""
  }


  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroAssinaturaDadoCartaoPage');
    
  }

}
