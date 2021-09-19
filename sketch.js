//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raio = diametroBolinha / 2;

//Velocidade da bolinha
let speedX = 5;
let speedY= 5;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 145;
let comprimentoRaquete =10;
let alturaRaquete =90;

//variaveis do Oponente
let xRaqueteOponente=585;
let yRaqueteOponente=147;
let speedYOponente ;
let chanceDeErrar = 0;

//placar
let meusPontos = 0;
let oponentePontos=0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let hit = false

function mostraBolinha (){
 circle(xBolinha,yBolinha,diametroBolinha);}

function movimentaBolinha(){
   xBolinha += speedX;
    yBolinha += speedY;
}

function colisaoBorda() {

if (xBolinha + raio > width || xBolinha - raio < 0) { 
  speedX *= -1;
  
  }

  if (yBolinha + raio > height || yBolinha -raio < 0 ) { 
  speedY *= -1
  
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  }

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentoRaquete();
  colisaoBibilioteca(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoBibilioteca(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  

}
function mostraRaquete (x,y){
  rect(x,y,comprimentoRaquete ,alturaRaquete);
}


function movimentoRaquete(){  if (keyIsDown(UP_ARROW)) {
  yRaquete -= 8;
  }
  if (keyIsDown(DOWN_ARROW)) {
  yRaquete += 8;
  }

}



function colisaoBibilioteca(x,y) {
 hit=  collideRectCircle(x,y,comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (hit) { speedX *= -1; 
  raquetada.play() }


  }
function movimentoRaqueteOponente(){ speedYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete /2 - 30 ;
  yRaqueteOponente += speedYOponente + chanceDeErrar;
   calculaChanceDeErrar()
}
function incluiPlacar(){
  stroke(255);
  textSize(20);
  textAlign(CENTER);
  fill(color(32,178,170));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(32,178,170));
  rect(450,10,40,20);
  fill(255);
  text(oponentePontos, 470, 26);

  }
function marcaPonto(){
  if(xBolinha > 590){
meusPontos+=1
ponto.play() }
  if(xBolinha < 10){  
    oponentePontos+=1
 ponto.play()}
  
  }
function calculaChanceDeErrar() {
  if (oponentePontos >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 49){
    chanceDeErrar = 50
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


  