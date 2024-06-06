let xbola = 500;
let ybola = 400;
let diametro = 80;
let raio = diametro / 2;
let xvb = 6;
let yvb = 6;
let xr=5;
let yr=150;
let lr=7;
let ar=150;
let xri=985;
let yri=150;
let colidiu = false;
let meuspontos =0;
let pontosinimigo =0;
let imagem;
let ponto;
let fundo;


function setup() {
  createCanvas(1000, 800);
  fundo.loop();
}

function preload(){
  imagem = loadImage("espaco.jpg");
  fundo = loadSound("fundo.wav");
  ponto = loadSound("ponto.wav");
}

function draw() {
  background(0);
  image(imagem,0,0,1000,800);
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraquete();
  mexeraqueteinimigo();
  quicaraquetebola(xri,yri);
  quicaraquetebola(xr,yr);
  pontos();
  placar();
  texto();
}
function quicaraquetebola(x, y) {
  colidiu = collideRectCircle(x, y, lr, ar, xbola, ybola, diametro);

  if (colidiu) {
    xvb *= -1;
  }
}

function mostrabola() {
  circle(xbola, ybola, diametro);
}

function mexebola(){
  xbola += xvb;
  ybola += yvb;
}
function quicabola(){
  if (xbola + raio > width || xbola - raio < 0) {
    xvb *= -1;
  }
  if (ybola + raio > height || ybola - raio < 0) {
    yvb *= -1;
    
  }
}

function mostraraquete(x,y){
  rect(x,y,lr,ar);
}  
  function mexeraquete(){
    if (keyIsDown(UP_ARROW))
      yr-=10;
    
    if(keyIsDown( DOWN_ARROW))
      yr+=10;
    
  }
function mexeraqueteinimigo(){
   if (keyIsDown(87))
      yri-=10;
    
    if(keyIsDown(83))
      yri+=10;
}

function pontos(){
  if (xbola > 990){
    meuspontos +=1
    ponto.play();
  }
   if (xbola < 10){
    pontosinimigo +=1
    ponto.play();
  }
}

function placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(20);
  fill("black");
  rect(130,10,40,20);
  fill("white");
  text(meuspontos,150,27);
  fill("red");
  rect(780,10,40,20);
  fill("white");
  text(pontosinimigo,800,27)
}

function texto(){
  let frase ="MEUS PONTOS"
    let xf
}