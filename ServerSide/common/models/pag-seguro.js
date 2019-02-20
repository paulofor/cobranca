'use strict';

//var http = require("http");
var request = require('request');

module.exports = function (Pagseguro) {

    var idSessao;

    /**
     * 
     * @param {Function(Error, object)} callback
     */

    Pagseguro.IniciaSessao = function (callback) {
        request.post('https://ws.pagseguro.uol.com.br/v2/sessions?email=paulofore@gmail.com&token=5A0836AD2E5B41B4AD99D' ,{} , (err,response,body) => {
            console.log('Body:' + body);
            console.log('Erro:' + err);
            console.log('Response: ' + response);
        })
        /*
        this.http.post(this.urlSession, {}, {}).subscribe(data => {
            console.log('Data:' , data);
            //xml2js.parseString(data["_body"], function (err, result) {
            //  this.idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
            //});
          });
        */
        var resposta;
        callback(null, resposta);
    };
};
