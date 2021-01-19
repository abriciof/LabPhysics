let resultado = 0;

function calcularCorrente(tensao, resistencia){
    //let resul = tensao/resistencia;
    //console.log(tensao);
    //console.log(resistencia);
    console.log(typeof tensao);

    const visor = document.getElementById('visor');

    if(tensao!=0 && resistencia!=0){
        resultado = tensao/resistencia;
        resultado = resultado.toFixed(2);
        visor.firstChild.nodeValue = resultado + ' A';

    }else {
        visor.firstChild.nodeValue = '0.00 A';
    }   

    

}

function esconder(){
    const menu = document.getElementById('navbarNav');
    menu.classList.add('show');
    menu.classList.remove('show');


}
/*
    //console.log(menu);
    
    let binario = menu.classList.contains("collapsing");
    console.log(binario);
    

    if(binario == true){
        menu.classList.remove('show');
        console.log("removeu")
    }else{
        menu.classList.add('show');
    }





    const menu = document.querySelector('#navbarNav');
    //const menu = documento.getElementById('navbarNav')
    console.log(menu);
    if(menu.classList.contains("show")){


        //menu.classList.remove('collapse');
        //menu.classList.add('collapse');


        //menu.classList.remove('navbar-collapse');
        //menu.classList.add('navbar-collapse');


        menu.classList.remove('collapsing');

        //menu.classList.add('show');
        menu.classList.remove('show');


    }
    

   
    if(value === false){
        //menu.classList.add('asdasdasds');
        menu.classList.add('collapsing');
        mini_menu.classList.remove('show');

        return true;
    }else{
        return false;
    }

    //menu.classList.toggle('show');
    //menu.classList.toggle('collapsing');

   
    if(menu.classList.contains("collapse")){
        console.log("tem");

        //mini_menu.classList.remove('collapsing');
       // mini_menu.classList.remove('show');
    }
    console.log("passou aq");
    
    //
   
    //mini_menu.classList.remove('collapse');
    //mini_menu.classList.add('collapse');
    
   


 */

