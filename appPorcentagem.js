const express  = require('express');
const api = express();


api.get('/teste', (req, res) => {
    return res.status(200).send('Nossa API esta funcionando!');
});



fCalculaPorcentagem = (numero, porcentagem) => {
    return (porcentagem*numero)/100;
    
};

module.exports = async function(context, req){
let porcentagemIndicada = Number(req.query.porcentagem);
let numeroIndicado = Number(req.query.numero);

if (isNaN(porcentagem) || isNaN(numero)) {
    return res.status(400).send('Dados incorretos, os campos aceitam somente numeros')
}

let calcularPrcentagem = fCalculaPorcentagem(numero, porcentagem);

context.res.json({
    porcentagem: porcentagemIndicada,
    numero: numeroIndicado
});
}
