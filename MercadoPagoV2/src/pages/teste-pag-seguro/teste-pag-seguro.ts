import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PagSeguroApi } from '../../app/shared/sdk/index';

declare var PagSeguroDirectPayment: any;

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
  hash = '';
  tokenCartao = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private pagSrv: PagSeguroApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePagSeguroPage');
    this.pagSrv.ObtemSessao((err,resp) => {
      console.log('Err:' + JSON.stringify(err));
      console.log('Resp:' + JSON.stringify(resp));
      this.idSession = resp;
      
      this.setSessao();
    })
  }

  setSessao() {
    PagSeguroDirectPayment.setSessionId(this.idSession);
    PagSeguroDirectPayment.getPaymentMethods({
      amount: 5.00,
      success: function (response) {
        console.log('MeioPagto Sucesso:' + JSON.stringify(response));
      },
      error: function (response) {
        console.log('MeioPgto Falha:' + JSON.stringify(response));
        // Callback para chamadas que falharam.
      },
      complete: function (response) {
        // Callback para todas chamadas.
        console.log('MeioPgto Total:' + JSON.stringify(response));
      }
    });
  }

  obtemHashCliente() {
    PagSeguroDirectPayment.onSenderHashReady(function (response) {
      if (response.status == 'error') {
        console.log(response.message);
        return false;
      }
      this.hash = response.senderHash; //Hash estará disponível nesta variável.
    });
  }

  obtemParcelamento() {
    PagSeguroDirectPayment.getInstallments({
      amount: 118.80,
      maxInstallmentNoInterest: 2,
      brand: 'visa',
      success: function (response) {
        // Retorna as opções de parcelamento disponíveis
        console.log('Parcelamento Sucesso:' + response);
      },
      error: function (response) {
        // callback para chamadas que falharam.
        console.log('Parcelamento Erro:' + response);
      },
      complete: function (response) {
        // Callback para todas chamadas.
        console.log('Parcelamento Completo:' + response);
      }
    });
  }


  // seis primeiros digitos do cartao
  obtemBandeira() {
    PagSeguroDirectPayment.getBrand({
      cardBin: 411111,
      success: function (response) {
        //bandeira encontrada
        console.log('Bandeira Sucesso:' + response);
      },
      error: function (response) {
        //tratamento do erro
        console.log('Bandeira Erro:' + response);
      },
      complete: function (response) {
        //tratamento comum para todas chamadas
        console.log('Bandeira Completo:' + response);
      }
    });
  }


  obtemTokenCartao() {
    PagSeguroDirectPayment.createCardToken({
      cardNumber: '4111111111111111', // Número do cartão de crédito
      brand: 'visa', // Bandeira do cartão
      cvv: '013', // CVV do cartão
      expirationMonth: '12', // Mês da expiração do cartão
      expirationYear: '2026', // Ano da expiração do cartão, é necessário os 4 dígitos.
      success: function (response) {
        // Retorna o cartão tokenizado.
        console.log('TokenCard Sucesso:' + response);
      },
      error: function (response) {
        // Callback para chamadas que falharam.
        console.log('TokenCard Erro:' + response);
      },
      complete: function (response) {
        // Callback para todas chamadas.
        console.log('TokenCard Completo:' + response);
      }
    });
  }


}
