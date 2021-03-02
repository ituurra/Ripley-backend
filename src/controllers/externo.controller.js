const { json } = require("express");
const request = require("request");
var https = require("https");

const getindicadores = (req, resp) => {
  request.get("https://mindicador.cl/api", (error, res, info) => {
    if (error) {
      resp.json((message = "error"));
    }

    var dailyIndicators = JSON.parse(info);
    if (req.body.valores === "undefined") {
      resp.json(dailyIndicators);
    } else {
      var indicadores = [];

      if (req.body.valores.length > 0) {
        for (let i = 0; i < req.body.valores.length; i++) {
          if (req.body.valores[i] === "uf") {
            indicadores.push(dailyIndicators.uf);
          }
          if (req.body.valores[i] === "dolar") {
            indicadores.push(dailyIndicators.dolar);
          }
          if (req.body.valores[i] === "utm") {
            indicadores.push(dailyIndicators.utm);
          }
        }
        resp.json(indicadores);
      } else {
        resp.json(dailyIndicators);
      }
    }
  });
};

module.exports = { getindicadores };
