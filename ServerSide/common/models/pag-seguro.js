'use strict';

//var http = require("http");
var request = require('request');
var xml2js = require('xml2js');

module.exports = function (Pagseguro) {

    var token = '5A0836AD2E5B41B4AD993D27B4A4ED3D';

    var urlSession = 'https://ws.pagseguro.uol.com.br/v2/sessions?email=paulofore@gmail.com&token=' + token;

    var urlTransacao = 'https://ws.pagseguro.uol.com.br/v2/transactions?email=paulofore@gmail.com&token=' + token;

    var idSessao;

    var cartao =
        'paymentMode=default' +
        '&paymentMethod=creditCard' +
        '&receiverEmail=suporte@lojamodelo.com.br' +
        '&currency=BRL' +
        '&extraAmount=1.00' +
        '&itemId1=0001' +
        '&itemDescription1=Notebook Prata' +
        '&itemAmount1=1.50' +
        '&itemQuantity1=1' +
        '&notificationURL=https://sualoja.com.br/notifica.html' +
        '&reference=REF1234' +
        '&senderName=Jose Comprador' +
        '&senderCPF=22111944785' +
        '&senderAreaCode=11' +
        '&senderPhone=56273440' +
        '&senderEmail=comprador@uol.com.br' +
        '&senderHash={hash_obtido_no_passo_2.3}' +
        '&shippingAddressRequired=true' +
        '&shippingAddressStreet=Av. Brig. Faria Lima' +
        '&shippingAddressNumber=1384' +
        '&shippingAddressComplement=5o andar' +
        '&shippingAddressDistrict=Jardim Paulistano' +
        '&shippingAddressPostalCode=01452002' +
        '&shippingAddressCity=Sao Paulo' +
        '&shippingAddressState=SP' +
        '&shippingAddressCountry=BRA' +
        '&shippingType=1' +
        '&shippingCost=1.00' +
        '&creditCardToken={creditCard_token_obtido_no_passo_2.6}' +
        '&installmentQuantity=1' +
        '&installmentValue={installmentAmount_obtido_no_retorno_do_passo_2.5}' +
        '&noInterestInstallmentQuantity={valor_maxInstallmentNoInterest_incluido_no_passo_2.5}' +
        '&creditCardHolderName=Jose Comprador' +
        '&creditCardHolderCPF=22111944785' +
        '&creditCardHolderBirthDate=27/10/1987' +
        '&creditCardHolderAreaCode=11' +
        '&creditCardHolderPhone=56273440' +
        '&billingAddressStreet=Av. Brig. Faria Lima' +
        '&billingAddressNumber=1384' +
        '&billingAddressComplement=5o andar' +
        '&billingAddressDistrict=Jardim Paulistano' +
        '&billingAddressPostalCode=01452002' +
        '&billingAddressCity=Sao Paulo' +
        '&billingAddressState=SP' +
        '&billingAddressCountry=BRA';



    /**
     *
     * @param {string} senderHash
     * @param {string} creditCardToken
     * @param {string} installmentQuantity
     * @param {string} installmentValue
     * @param {string} noInterestInstallmentQuantity
     * @param {Function(Error, object)} callback
     */

    Pagseguro.CheckoutCartao = function (senderHash, creditCardToken, installmentQuantity, installmentValue, noInterestInstallmentQuantity, callback) {
        var resposta;
        // TODO
        callback(null, resposta);
    };



    /**
     * 
     * @param {Function(Error, string)} callback
     */

    Pagseguro.ObtemSessao = function (callback) {

        var proxyUrl = "http://tr626987:Eureka48@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        console.log('Proxy', JSON.stringify(proxiedRequest));
        proxiedRequest.post(urlSession, {}, (err, response, body) => {
            console.log('Body:' + body);
            console.log('Erro:' + err);
            console.log('Response: ' + JSON.stringify(response));
            console.log('Status: ' + response.statusCode);
            xml2js.parseString(body, (err, result) => {
                this.idSessao = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
                //console.log('id=' + this.idSessao);
                callback(err, this.idSessao);
            });
        })

    };



    /**
     * 
     * @param {Function(Error, object)} callback
     */

    Pagseguro.IniciaSessao = function (callback) {

        var proxyUrl = "http://tr626987:Eureka48@10.21.7.10:82";
        var proxiedRequest = request.defaults({ 'proxy': proxyUrl });

        console.log('Proxy', JSON.stringify(proxiedRequest));
        request.post(urlSession, {}, (err, response, body) => {
            console.log('Body:' + body);
            console.log('Erro:' + err);
            console.log('Response: ' + JSON.stringify(response));
            console.log('Status: ' + response.statusCode);
            xml2js.parseString(body, (err, result) => {
                this.idSessao = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
                //console.log('id=' + this.idSessao);
                callback(err, this.idSessao);
            });
        })
        /*
        this.http.post(this.urlSession, {}, {}).subscribe(data => {
            console.log('Data:' , data);
            //xml2js.parseString(data["_body"], function (err, result) {
            //  this.idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
            //});
          });
        */
    };
};
