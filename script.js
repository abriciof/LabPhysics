let resultado = 0;

function calcularCorrente(tensao, resistencia){
    //let resul = tensao/resistencia;
    //console.log(tensao);
    //console.log(resistencia);

    const visor = document.getElementById('visor');
    resultado = tensao/resistencia;
    resultado = parseFloat(resultado.toFixed(2));
    visor.firstChild.nodeValue = resultado + ' A';

}



