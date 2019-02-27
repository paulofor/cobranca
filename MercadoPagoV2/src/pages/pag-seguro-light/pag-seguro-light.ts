import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var PagSeguroLightbox: any;
/**
 * Generated class for the PagSeguroLightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-seguro-light',
  templateUrl: 'pag-seguro-light.html',
})
export class PagSeguroLightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroLightPage');
  }

  iniciaBox() {
    console.log('iniciaBox');
    PagSeguroLightbox("1F69A3CF7878ED9994B3DF9DDC706796");
    
  }

}
