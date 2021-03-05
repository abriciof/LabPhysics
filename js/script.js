
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

    let rangeTensao = document.getElementById('customRangeTensao');
    let rangeCorrente = document.getElementById('customRangeCorrente');
    let rangeResistencia = document.getElementById('customRangeResistencia');

    let tensao = document.getElementById('resultadoTensao');
    let corrente = document.getElementById('resultadoCorrente');
    let resistencia = document.getElementById('resultadoResistencia');

    let resultado = 0;

    if(menu.value == 1){ // Corrente
          
        if(rangeTensao.value!=0 && rangeResistencia.value!=0){
            resultado = rangeTensao.value/rangeResistencia.value;
             resultado *=1000;
            resultado = resultado.toFixed(1);
            corrente.value = resultado + ' mA';
            rangeCorrente.value = resultado;
        }

    }else if(menu.value == 2){ // Tensao
        
        if(rangeCorrente.value!=0 && rangeResistencia.value!=0){
            resultado = rangeCorrente.value/1000;
            resultado = resultado*rangeResistencia.value;
            
            
            resultado = resultado.toFixed(1);
            tensao.value = resultado + ' V';
            rangeTensao.value = resultado;
        }


    }else if(menu.value == 3){ // Resistencia

        if(rangeCorrente.value!=0 && rangeTensao.value!=0){
            resultado = rangeCorrente.value/1000;
            resultado = (rangeTensao.value)/resultado;
            // resultado *= 100000;
           
            resultado = resultado.toFixed(1);
            resistencia.value = resultado +' Ω';
            rangeResistencia.value = resultado;
        }

    }

   
}


function moveBall(){ 
    var ballObj = document.getElementById ("bola"); 

    ballObj.style.background = blue;
    ballObj.style.left = "70px"; 
    ballObj.style.top = "80px"; 
    }



    function moveDomObj(id, left, top){
        console.log("entrou 3");
        const domObj = document.getElementById(id);

        domObj.style.left = left+"px";
        domObj.style.top = top+"px";
    }

    var timer2 = null;
    var s = 0;

    function stepBall2(){
        console.log("entrou 2");
        const x = 50+4*s;
        const y = 35+1.6*s*s;   // a parabolic path y=x*x
        moveDomObj("bola", x, y);
        s++;
        if (s<14){
            timer2 = setTimeout(stepBall2, 100);
        }else{
                s = 0;     // so we can do it again
            }
    }

    function startBall2(){
        console.log("entrou");
        timer2 = setTimeout(stepBall2, 100);
    }