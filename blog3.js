var escuchar= document.getElementById("escuchar");
escuchar.style.display= 'none';

var iniciar= document.getElementById("iniciar");
var retrasar= document.getElementById("retrasar");
var adelantar=  document.getElementById("adelantar");
var silenciar=  document.getElementById("silenciar");
var bajarV=  document.getElementById("bajarV");
var subirV= document.getElementById("subirV");
var video= document.getElementById("video");

iniciar.addEventListener("click", iniciarVideo,false);
retrasar.addEventListener("click", retrasarVideo,false);
adelantar.addEventListener("click", adelantarVideo,false);
silenciar.addEventListener("click", silenciarVolumen,false);
escuchar.addEventListener("click", escucharVolumen, false);
bajarV.addEventListener("click", bajarVolumen,false);
subirV.addEventListener("click", subirVolumen,false);

function iniciarVideo(){
    video.currentTime= 0;
    video.play();
}

function retrasarVideo(){
    video.currentTime -= 5;
}

function adelantarVideo(){
    video.currentTime += 5;
}

function bajarVolumen(){
    video.volume-=0.1;
}

function subirVolumen(){
    video.volume+=0.1;
}

function silenciarVolumen(){
    video.muted= true;
    escuchar.style.display= 'inline';
    silenciar.style.display= 'none';
}

function escucharVolumen(){
    video.muted= false;
    silenciar.style.display= 'inline';
    escuchar.style.display= 'none';
}