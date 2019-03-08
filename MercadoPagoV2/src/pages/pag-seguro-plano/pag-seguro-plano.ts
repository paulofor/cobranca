import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpResponse } from '@angular/common/http';

/**
 * Generated class for the PagSeguroPlanoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-plano',
  templateUrl: 'pag-seguro-plano.html',
})
export class PagSeguroPlanoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroPlanoPage');
  }

  criaPlano() {
    var url = 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request';
    this.http.post(url,{},{})
      .subscribe((result) => {
        console.log('Result: ' , result);
      })
  }

}
