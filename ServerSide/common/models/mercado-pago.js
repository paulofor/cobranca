'use strict';

var MP = require("mercadopago");

module.exports = function (Mercadopago) {

    var mp = new MP("APP_USR-6371948622467215-020511-5317ef62bbd997d52c2979a29f2c8419-133771061");

    /**
     * 
     * @param {string} idPagamento 
     * @param {Function(Error, object)} callback
     */

    Mercadopago.ConsultaCompra = function (idPagamento, callback) {
        

        var doPayment = mp.get("/v1/payments/" + idPagamento);

        doPayment.then(
            function (payment) {
                console.log('Pgto:', payment);
                callback(null, payment.response);
            },
            function (error) {
                console.log('Erro:', error);
                callback(error, null);
            });
    };



    /**
 * 
 * @param {string} token 
 * @param {Function(Error, object)} callback
 */

    Mercadopago.EfetuaCompra = function (token, callback) {


        var doPayment = mp.post("/v1/payments",
            {
                "transaction_amount": 2.50,
                "token": token,
                "description": "SERVICO WEB",
                "installments": 1,
                "payment_method_id": "visa",
                "payer": {
                    "email": "paforest1970@gmail.com"
                }
            });

        doPayment.then(
            function (payment) {
                console.log('Pgto:', payment);
            },
            function (error) {
                console.log('Erro:', error);
            });


        var saida = 'recebeu : ' + token;
        console.log('Efetua Compra: ', token);
        callback(null, saida);
    };

};
