let resultado = 0;

// const rangers = document.querySelectorAll('.custom-range');
// let t = document.getElementById('customRangeTensao');
// let r = document.getElementById('customRangeResistencia');

// rangers.forEach(ranger => {
//     ranger.addEventListener('calcular', calcularCorrente(t,r));
// });

function calcularCorrente(tensao, resistencia){

    const visor = document.getElementById('visor');

    if(tensao!=0 && resistencia!=0){
        resultado = tensao/resistencia;
        resultado *=1000;
        resultado = resultado.toFixed(2);
        visor.firstChild.nodeValue = 'Corrente = ' + resultado + ' mA';

    }else {
        visor.firstChild.nodeValue = '0.00 A';
    }   

}
