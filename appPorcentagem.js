// Para funcionar no azure nós nao precisamos do codigo que estava aqui na parte de cima

fCalculaPorcentagem = (numero, porcentagem) => {
    return (porcentagem*numero)/100;
    
};

module.exports = async function(context, req){
    let porcentagemIndicada = Number(req.query.porcentagem);
    let numeroIndicado = Number(req.query.numero);

    if (isNaN(porcentagemIndicada) || isNaN(numeroIndicado)) {
        return context.res.status(400).send('Dados incorretos, os campos aceitam somente numeros')
    }

    let calcularPrcentagem = fCalculaPorcentagem(numeroIndicado, porcentagemIndicada);

    context.res.json({
        porcentagem: porcentagemIndicada,
        numero: numeroIndicado
    });
}
