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
                "transaction_amount": 2,
                "token": token,
                "description": "Descricao",
                "installments": 1,
                "payment_method_id": "visa",
                "payer": {
                    "email": "test_user_19653727@testuser.com"
                }
            });

        doPayment.then(
            function (payment) {
                console.log(payment);
            },
            function (error) {
                console.log(error);
            });


        var saida = 'recebeu : ' + token;
        console.log('Efetua Compra: ', token);
        callback(null, saida);
    };

};
