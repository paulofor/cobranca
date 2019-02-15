'use strict';

var MP = require("mercadopago");

module.exports = function (Mercadopago) {



    /**
 * 
 * @param {string} token 
 * @param {Function(Error, object)} callback
 */

    Mercadopago.EfetuaCompra = function (token, callback) {




        var mp = new MP("APP_USR-6371948622467215-020511-5317ef62bbd997d52c2979a29f2c8419-133771061");

        var doPayment = mp.post("/v1/payments",
            {
                "transaction_amount": 3.50,
                "token": token,
                "description": "Teste do Paulo",
                "installments": 1,
                "payment_method_id": "visa",
                "payer": {
                    "email": "paforestieri@stefanini.com"
                }
            });

        doPayment.then(
            function (payment) {
                console.log('Pgto:' , payment);
            },
            function (error) {
                console.log('Erro:' , error);
            });


        var saida = 'recebeu : ' + token;
        console.log('Efetua Compra: ', token);
        callback(null, saida);
    };

};
