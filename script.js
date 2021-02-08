
// Carregamento Inicial da página
document.getElementById('customRangeCorrente').disabled = true;
document.getElementById('customRangeTensao').disabled = false;        
document.getElementById('customRangeResistencia').disabled = false;




// Depois de escolher uma variável
function bloquear(value){
    if(value == 1){
        document.getElementById('customRangeCorrente').disabled = true;
        document.getElementById('customRangeTensao').disabled = false;        
        document.getElementById('customRangeResistencia').disabled = false;

    }else if(value == 2 ){
        document.getElementById('customRangeCorrente').disabled = false;
        document.getElementById('customRangeTensao').disabled = true;        
        document.getElementById('customRangeResistencia').disabled = false;

    }else if(value == 3){
        document.getElementById('customRangeCorrente').disabled = false;
        document.getElementById('customRangeTensao').disabled = false;        
        document.getElementById('customRangeResistencia').disabled = true;
    }

}


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

    if(menu.value == 1){ // Corrente
        const range = document.getElementById('customRangeCorrente');

    
        if(tensao.value!=0 && resistencia.value!=0){
            resultado = tensao.value/resistencia.value;
            resultado *=1000;
            resultado = resultado.toFixed(1);
            corrente.value = resultado;
            range.value = resultado;
        }

    }else if(menu.value == 2){ // Tensao
        const range = document.getElementById('customRangeTensao');

        if(corrente.value!=0 && resistencia.value!=0){
            resultado = corrente.value*resistencia.value;
            resultado /= 10000;
        
            resultado = resultado.toFixed(1);
            tensao.value = resultado;
            range.value = resultado;
        }


    }else if(menu.value == 3){ // Resistencia
        const range = document.getElementById('customRangeResistencia');

        if(corrente.value!=0 && tensao.value!=0){
            resultado = (tensao.value)/(corrente.value);
            resultado *= 100000;
           
            resultado = resultado.toFixed(1);
            resistencia.value = resultado;
            range.value = resultado;
        }

    }

   
}
