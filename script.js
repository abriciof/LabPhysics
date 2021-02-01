

// const rangers = document.querySelectorAll('.custom-range');
// let t = document.getElementById('customRangeTensao');
// let r = document.getElementById('customRangeResistencia');

// rangers.forEach(ranger => {
//     ranger.addEventListener('calcular', calcularCorrente(t,r));
// });


function calcular(){
    const menu = document.getElementById('menuz');
    let tensao = document.getElementById('resultadoTensao');
    let corrente = document.getElementById('resultadoCorrente');
    let resistencia = document.getElementById('resultadoResistencia');

    let resultado = 0;

    if(menu.value == 1){
        const range = document.getElementById('customRangeCorrente');
        //visor.value = 342;
    
        if(tensao.value!=0 && resistencia.value!=0){
            resultado = tensao.value/resistencia.value;
            resultado *=1000;
            resultado = resultado.toFixed(2);
            corrente.value = resultado;
            range.value = resultado;
        }

    }else if(menu.value == 2){
        const range = document.getElementById('customRangeTensao');

        if(corrente.value!=0 && resistencia.value!=0){
            resultado = corrente.value*resistencia.value;
            resultado /= 100000;
        
            resultado = resultado.toFixed(2);
            tensao.value = resultado;
            range.value = resultado;
        }


    }else if(menu.value == 3){
        const range = document.getElementById('customRangeResistencia');

        if(corrente.value!=0 && tensao.value!=0){
            resultado = (tensao.value)/corrente.value;
            resultado *= 1000;
            resultado = resultado.toFixed(2);
            resistencia.value = resultado;
            range.value = resultado;
        }

    }

   
}
