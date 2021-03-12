function resultante(){        
    let rangeAngulo = document.getElementById('customRangeAngulo');
    let rangeVelocidade = document.getElementById('customRangeVelocidade');    

    let angulo = document.getElementById('ang');  
    let velocidade = document.getElementById('vo');

    let tempomax = document.getElementById('idTempoMax');    
    let temposolo = document.getElementById('idTempoalcance');
    let altura = document.getElementById('idAlturaMax');
    let alcance = document.getElementById('idAlcance');
   
    tempomax.value = ((rangeVelocidade.value*Math.sin(rangeAngulo.value*(Math.PI/180)))/9.81).toFixed(2);
    temposolo.value = tempomax.value*2 +' s';
    tempomax.value = tempomax.value + ' s';
    altura.value = (Math.pow(rangeVelocidade.value*Math.sin(rangeAngulo.value*(Math.PI/180)),2)/(9.81*2)).toFixed(2) + ' m';
    alcance.value = (Math.pow((rangeVelocidade.value),2)*Math.sin(2*rangeAngulo.value*(Math.PI/180))/9.81).toFixed(2) + ' m';
}


var cwidth = 675;
var cheight = 400;
var ctx;
var everything = [];
var tid;
var outofcannon;
var horvelocity;
var verticalvel1;
var verticalvel2;
var gravity = 2;  //arbitrary. Makes for nice arc.

// Propriedades Canhao
var cannonx = 5;
var cannony = 355;
var cannonlength = 50;
var cannonht = 15;

// Bola
var ballrad = 7;

// Alvo
var targetx = 675;
var targety = 50;
var targetw = 85;
var targeth = 280;

var htargetx = 400;
var htargety = 220;
var htargetw = 355;
var htargeth = 96;


var indice_gravidade = 1;

//define Ball, Picture, Myrectangles, to be objects on canvas. Each has a draw method.
//Each object painted on the canvas corresponds to an element in everything array.
//each element is an array, with some of the values used to perform a rotation.

class Ball {
    constructor(sx, sy, rad, stylestring) {
        this.sx = sx;
        this.sy = sy;
        this.rad = rad;
        this.draw = drawball;
        this.moveit = moveball;
        this.fillstyle = stylestring;
    }
}

function drawball() {
    ctx.fillStyle=this.fillstyle;
    ctx.beginPath();
    //ctx.fillStyle= rgb(0,0,0);
    ctx.arc(this.sx,this.sy,this.rad,0,Math.PI*2,true);
    ctx.fill();	
}

function moveball(dx,dy) {
    this.sx +=dx;
    this.sy +=dy;
}

var cball = new Ball(cannonx+cannonlength-15,cannony+cannonht*.5 - 35,ballrad,"#24252a");


class Myrectangle {
    constructor(sx, sy, swidth, sheight, stylestring) {
        this.sx = sx;
        this.sy = sy;
        this.swidth = swidth;
        this.sheight = sheight;
        this.fillstyle = stylestring;
        this.draw = drawrects;
        this.moveit = moveball;
    }
}

function drawrects() {
    ctx.fillStyle = this.fillstyle;
    ctx.fillRect(this.sx,this.sy,this.swidth,this.sheight);	
}

class Picture {
    constructor(sx, sy, swidth, sheight, filen) {
        var imga = new Image();
        imga.src = filen;
        this.sx = sx;
        this.sy = sy;
        this.img = imga;
        this.swidth = swidth;
        this.sheight = sheight;
        this.draw = drawAnImage;
        this.moveit = moveball;
    }
}



function drawAnImage() {
    ctx.drawImage(this.img,this.sx,this.sy,this.swidth,this.sheight);
}



// Alvo à direita, nao tem
var target = new Picture(targetx,targety,targetw,targeth);

// Escrita da Gravidade no canto superior direito
// 

// Chao do canhao
var ground = new Myrectangle(0,370,675,30,"rgb(122, 70, 11)");

// Canhao
var cannon = new Myrectangle(cannonx,cannony,cannonlength,cannonht,"rgba(11, 122, 66, 0.712)");




var targetindex = everything.length;
everything.push([ground,false]);
var ballindex = everything.length;
everything.push([cball,false]);
var cannonindex = everything.length;  //save to use later
everything.push([cannon,true,-45*(Math.PI/180),cannonx,cannony+cannonht*.5]);  // will set rotation later


function rotacionar() {
    ctx.clearRect(0,0,cwidth,cheight);
    ctx.font='18px serif';
    ctx.lineWidth=4;
    ctx.fillStyle='black';
    ctx.fillText('Gravidade: 9,81 m/s²',470,30);
    

    var angle = Number(document.f.customRangeAngulo.value);
    var outofcannon = Number(document.f.customRangeVelocidade.value);
    var angleradians = angle*Math.PI/180;
    horvelocity =  outofcannon*Math.cos(angleradians);
    verticalvel1 = - outofcannon*Math.sin(angleradians);
    everything[cannonindex][2]= - angleradians;
    cball.sx = cannonx + cannonlength*Math.cos(angleradians);
    cball.sy = cannony+cannonht*.5 - cannonlength*Math.sin(angleradians);

    drawall();
    ctx.fill();
    
    //  ctx.clearRect(0,300,cwidth,70);
    
    // everything.push([cannon,true,-angulo*(Math.PI/180),cannonx,cannony+cannonht*.5]); 
    // drawall();
    // var angle = Number(document.f.ang.value);
    // var outofcannon = Number(document.f.vo.value);
    // var angleradians = angle*Math.PI/180;
    // horvelocity =  outofcannon*Math.cos(angleradians);
    // verticalvel1 = - outofcannon*Math.sin(angleradians);
    // everything[cannonindex][2]= - angleradians;
    // cball.sx = cannonx + cannonlength*Math.cos(angleradians);
    // cball.sy = cannony+cannonht*.5 - cannonlength*Math.sin(angleradians);
}



function init(){
    ctx = document.getElementById('canvas').getContext('2d');  
    ctx.font='18px serif';
    ctx.lineWidth=4;
    ctx.fillStyle='black';
    ctx.fillText('Gravidade: 9,81 m/s²',470,30);

    
    drawall();  
} 
function fire() {
    document.getElementById('customRangeAngulo').disabled = true;
    document.getElementById('customRangeVelocidade').disabled =true;  
    document.getElementById('botao-lancar').disabled = true;
    

    
    // Adicionado
    ctx.clearRect(0,0,cwidth,cheight);

    ctx.font='18px serif';
    ctx.lineWidth=4;
    ctx.fillStyle='black';
    ctx.fillText('Gravidade: 9,81 m/s²',470,30);
    

    var angle = Number(document.f.customRangeAngulo.value);
    var outofcannon = Number(document.f.customRangeVelocidade.value);
    var angleradians = angle*Math.PI/180;
    horvelocity =  outofcannon*Math.cos(angleradians);
    verticalvel1 = - outofcannon*Math.sin(angleradians);
    everything[cannonindex][2]= - angleradians;
    cball.sx = cannonx + cannonlength*Math.cos(angleradians);
    cball.sy = cannony+cannonht*.5 - cannonlength*Math.sin(angleradians);
    drawall();
    tid = setInterval(change,75);
    return false;
}


function drawall() {
    // ctx.clearRect(0,0,cwidth,cheight);
    

    var i;
    for (i=0;i<everything.length;i++) {
        var ob = everything[i];
        if (ob[1]) {  //need to translate and rotate
            ctx.save();
            ctx.translate(ob[3],ob[4]);
            ctx.rotate(ob[2]);
            ctx.translate(-ob[3],-ob[4]);
            ob[0].draw();
            ctx.restore(); }
        else {
        ob[0].draw();
        }
    }
}

function change() {
    var dx = horvelocity;
    verticalvel2 = verticalvel1 + gravity;
    var dy = (verticalvel1 + verticalvel2)*.5;
    verticalvel1 = verticalvel2;
    cball.moveit(dx,dy);

    // Não é necessário verificar se tocou em algum alvo, pois nao tem
    // o único objeto de colisão da bola é a plataforma onde está o canhão

    //check for hitting target
    // var bx = cball.sx;


    var by = cball.sy;


    // if ((bx>=(ground.sx + 7)) && (bx <= (ground.sx+ground.swidth))&&
    // (by>=(ground.sy+7))&&(by<=(ground.sy+ground.sheight))) {
    //     clearInterval(tid);
    //     //remove target and insert htarget
    //     // everything.splice(targetindex,1,[htarget,false]);
    //     // everything.splice(ballindex,1);
    //     // drawall();
        
    // }
    // check for getting beyond ground level


    if (by>=(ground.sy-7)) {
        document.getElementById('customRangeAngulo').disabled = false;
        document.getElementById('customRangeVelocidade').disabled =false;  
        document.getElementById('botao-lancar').disabled = false;
        clearInterval(tid);
    }
    
    drawall();	
}
