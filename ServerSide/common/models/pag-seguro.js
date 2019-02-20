'use strict';

module.exports = function (Pagseguro) {

    idSessao;

    /**
     * 
     * @param {Function(Error, object)} callback
     */

    Pagseguro.IniciaSessao = function (callback) {

        this.http.post(this.urlSession, {}, {}).subscribe(data => {
            console.log('Data:' , data);
            //xml2js.parseString(data["_body"], function (err, result) {
            //  this.idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
            //});
          });
        var resposta;
        callback(null, resposta);
    };
};
