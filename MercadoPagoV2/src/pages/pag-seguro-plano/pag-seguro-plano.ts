import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PagSeguroApi } from '../../app/shared/sdk/index';

/**
 * Generated class for the PagSeguroPlanoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var PagSeguroDirectPayment: any;

@IonicPage()
@Component({
  selector: 'page-pag-seguro-plano',
  templateUrl: 'pag-seguro-plano.html',
})



export class PagSeguroPlanoPage {

  idSession = '';
  codigoFinal = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private pagSrv: PagSeguroApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagSeguroPlanoPage');
    this.pagSrv.ObtemSessao()
    .subscribe((resp) => {
      //console.log('Err:' + JSON.stringify(err));
      //console.log('Resp:' + JSON.stringify(resp));
      this.idSession = resp.idSessao;
      this.setSessao();
    })
  }


  setSessao() {
    console.log('SessionId: ' , this.idSession);
    PagSeguroDirectPayment.setSessionId(this.idSession);
    PagSeguroDirectPayment.getPaymentMethods({
      amount: 1.15,
      success: function (response) {
        console.log('Resultado setSessao() ok' + new Date());
        //console.log('MeioPagto Sucesso:' + JSON.stringify(response));
        //console.log('Vai chamar on sender');
        //this.obtemHashCliente();
      },
      error: function (response) {
        console.log('MeioPgto Falha:' + JSON.stringify(response));
        // Callback para chamadas que falharam.
      },
      complete: function (response) {
        // Callback para todas chamadas.
        //console.log('MeioPgto Total:' + JSON.stringify(response));
      }
    });
  }

 
  obtemTokenCartao() {
    console.log('--> Chamou token card');
    PagSeguroDirectPayment.createCardToken({
      cardNumber: '4111111111111111', // Número do cartão de crédito
      brand: 'visa', // Bandeira do cartão
      cvv: '013', // CVV do cartão
      expirationMonth: '12', // Mês da expiração do cartão
      expirationYear: '2026', // Ano da expiração do cartão, é necessário os 4 dígitos.
      success: function (response) {
        // Retorna o cartão tokenizado.
        console.log('TokenCard Sucesso:' + JSON.stringify(response.card.token));
        tokenGlobal = response.card.token;
      },
      error: function (response) {
        // Callback para chamadas que falharam.
        console.log('TokenCard Erro:' + JSON.stringify(response));
      },
      complete: function (response) {
        // Callback para todas chamadas.
        //console.log('TokenCard Completo:' + JSON.stringify(response));
      }
    });
  }

  enviaToken() {
    this.pagSrv.AderePlano(tokenGlobal)
      .subscribe((result) => {
        console.log('Result:' , result);
        if (result.code)
          this.codigoFinal = result.code;
      })
  }
}

export var tokenGlobal : string;