import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TestePagSeguroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste-pag-seguro',
  templateUrl: 'teste-pag-seguro.html',
})
export class TestePagSeguroPage {
 

  idSession = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePagSeguroPage');
    this.obtemSessao();
  }

  obtemSessao() {
    this.http.post(this.urlSession, {}, {}).subscribe(data => {
      console.log('Data:' , data);
      //xml2js.parseString(data["_body"], function (err, result) {
      //  this.idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
      //});
    });
  }


}
