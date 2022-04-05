var cont = 10;
var myAudio = new Audio('heartbeat.mp3');
var size = 200;
var ind = 0
var listHeart = ["heart.svg","heartB.svg","heartO.svg","heartY.svg","heartP.svg","heartG.svg"]

function changeHeart(){
    if(ind==listHeart.length-1){
        ind=0;
    }
    else{
        ind++;
    }
}

function makeHeart(posX,posY,zind){
    var bcg =  listHeart[ind];
    document.getElementById('Cuerpo').innerHTML+= `<div class="heart" style= 'display:flex;background-image: url("${bcg}"); flex-direction:column; justify-content:center ;position:absolute; top:${posY-(Math.round(size/2))}px; left:${posX-(Math.round(size/2))}px; width: ${size}px; height: ${size}px; z-index: ${zind};'> <span style='font-size:${Math.round(size/14)}px;'> Te Amo bb uwu </span><span style='font-size:${Math.round(size/14)}px;'> M y D </div>`
}

function doSomething(event){
    let old_body=document.getElementById('Cuerpo').innerHTML;
    document.getElementById('Cuerpo').innerHTML = "";
    document.getElementById('Cuerpo').innerHTML +=old_body;
    makeHeart(event.x,event.y,cont);
    myAudio.play();
    cont+=100;
}

window.addEventListener("click", doSomething);


window.addEventListener("keyup",(event)=>{
    if(event.key.toUpperCase()=="A"){
        document.getElementById('Cuerpo').innerHTML = "";
        let opc = Math.floor(Math.random() * 2);
        console.log(opc);
        myAudio.pause()
        if(opc===1){
            size = 200;
            //M
            makeHeart(150,150,10);
            makeHeart(150,250,10);
            makeHeart(150,350,10);
            makeHeart(150,450,10);
            makeHeart(150,550,10);
            makeHeart(200,200,10);
            makeHeart(250,250,10);
            makeHeart(300,300,10);

            makeHeart(350,250,10);
            makeHeart(400,200,10);
            makeHeart(450,150,10);

            makeHeart(450,150,10);
            makeHeart(450,250,10);
            makeHeart(450,350,10);
            makeHeart(450,450,10);
            makeHeart(450,550,10);


            makeHeart(950,150,10);
            makeHeart(950,250,10);
            makeHeart(950,350,10);
            makeHeart(950,450,10);
            makeHeart(950,550,10);

            makeHeart(1020,180,10);
            makeHeart(1100,200,10);
            makeHeart(1150,250,10);
            makeHeart(1150,300,10);
            makeHeart(1200,350,10);//
            makeHeart(1150,400,10);
            makeHeart(1150,450,10);
            makeHeart(1100,500,10);
            makeHeart(1020,530,10);

            document.getElementById('Cuerpo').innerHTML+= `<div class="heart" style= 'display:flex; flex-direction:column; justify-content:center ;position:absolute; top:${160}px; left:${475}px; width: 450px; height: 450px; z-index: ${1000};'> <span > Te Amo bb uwu </span><span> M y D </div>`
            myAudio.loop=true;
            myAudio.play();

            


        }
        else{
            document.getElementById('Cuerpo').innerHTML= `<div class="heart" style= 'display:flex; flex-direction:column; justify-content:center ;position:absolute; top:${-75}px; left:${315}px; width: 800px; height: 800px; z-index: ${1000};'> <span class="h2"> Te Amo bb uwu </span><span class="h2"> M y D </div>`
            myAudio.loop=true;
            myAudio.play();
        }

    }
    if(event.key.toUpperCase()=="D"){
        document.getElementById('Cuerpo').innerHTML = "";
        myAudio.loop=false;
        myAudio.pause();
        
    }
    if(event.key.toUpperCase()=="+"){ 
        size+=50;
    }
    if(event.key.toUpperCase()=="-"){
        if(size>150){
            size-=50;
        }       
    }
    if(event.key.toUpperCase()=="Z"){
        if(document.getElementById('Cuerpo').hasChildNodes)
            document.getElementById('Cuerpo').removeChild(document.getElementById('Cuerpo').lastChild);
    }
    if(event.key.toUpperCase()=="C"){
        changeHeart();
        alert(`${ind+1} de ${listHeart.length}`)
    }
    
})
