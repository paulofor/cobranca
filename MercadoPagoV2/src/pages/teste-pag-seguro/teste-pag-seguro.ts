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
  POST https://ws.pagseguro.uol.com.br/v2/sessions?{{credenciais}}

  urlSession = "https://pagseguro.uol.com.br/v2/sessions?email=paulofore@gmail.com&token=";

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePagSeguroPage');
    this.obtemSessao();
  }

  obtemSessao() {

  }

  private getSession(email, token) {
    return new Promise((resolve) => {
      resolve();
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let idSession = "";
      this.http.post(this.credencial.urlSession, {}, options).subscribe(data => {
        xml2js.parseString(data["_body"], function (err, result) {
          idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
        });
        this.credencial.idSession = idSession;
      });
    }).then(() => {
      return Promise.resolve(this.credencial);
    });
  }

}
