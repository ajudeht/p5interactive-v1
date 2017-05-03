var keystatus = {

  Z : {playing : false, midi : 60},
  S : {playing : false, midi : 61},
  X : {playing : false, midi : 62},
  D : {playing : false, midi : 63},
  C : {playing : false, midi : 64},
  V : {playing : false, midi : 65},
  G : {playing : false, midi : 66},
  B : {playing : false, midi : 67},
  H : {playing : false, midi : 68},
  N : {playing : false, midi : 69},
  J : {playing : false, midi : 70},
  M : {playing : false, midi : 71},

  Q : {playing : false, midi : 72},
  2 : {playing : false, midi : 73},
  W : {playing : false, midi : 74},
  3 : {playing : false, midi : 75},
  E : {playing : false, midi : 76},
  R : {playing : false, midi : 77},
  5 : {playing : false, midi : 78},
  T : {playing : false, midi : 79},
  6 : {playing : false, midi : 80},
  Y : {playing : false, midi : 81},
  7 : {playing : false, midi : 82},
  U : {playing : false, midi : 83},
  I : {playing : false, midi : 84},
  9 : {playing : false, midi : 85},
  O : {playing : false, midi : 86},
  0 : {playing : false, midi : 87},
  P : {playing : false, midi : 88},
  mouse : {playing : false},
}

var voices = {
  Z : null,
  S : null,
  X : null,
  D : null,
  C : null,
  V : null,
  G : null,
  B : null,
  H : null,
  N : null,
  J : null,
  M : null,

  Q : null,
  2 : null,
  W : null,
  3 : null,
  E : null,
  R : null,
  5 : null,
  T : null,
  6 : null,
  Y : null,
  7 : null,
  U : null,
  I : null,
  9 : null,
  O : null,
  0 : null,
  P : null,
  mouse : null,
};

var voices2 = {
  Z : null,
  S : null,
  X : null,
  D : null,
  C : null,
  V : null,
  G : null,
  B : null,
  H : null,
  N : null,
  J : null,
  M : null,

  Q : null,
  2 : null,
  W : null,
  3 : null,
  E : null,
  R : null,
  5 : null,
  T : null,
  6 : null,
  Y : null,
  7 : null,
  U : null,
  I : null,
  9 : null,
  O : null,
  0 : null,
  P : null,
  mouse : null,
};

var envelopes = {
    Z : null,
    S : null,
    X : null,
    D : null,
    C : null,
    V : null,
    G : null,
    B : null,
    H : null,
    N : null,
    J : null,
    M : null,

    Q : null,
    2 : null,
    W : null,
    3 : null,
    E : null,
    R : null,
    5 : null,
    T : null,
    6 : null,
    Y : null,
    7 : null,
    U : null,
    I : null,
    9 : null,
    O : null,
    0 : null,
    P : null,
    mouse : null,
};

var octave = 0;

var poly = 0;

var rotatespeed = .01;

var maxshapes = 50;

var slider, val;

var mic, fft;

function setup(){

createCanvas(windowWidth/2, windowHeight - 20);

mic = new p5.AudioIn();
mic.start();
fft = new p5.FFT();
fft.setInput(mic);

}

function draw(){


    background("#ededec");

    /*normalMaterial();
     rotateX((frameCount * 20000) * rotatespeed);
     rotateY((frameCount * 20000) * rotatespeed);
     rotateZ((frameCount * 20000) * rotatespeed);
     box(200*poly, 200*poly, 200*poly);*/
     noStroke();

fill('#ebebeb');
rect(((windowWidth/2)/13),0,(windowWidth/2)/13,windowHeight - 20);
fill('#deded9');
rect(((windowWidth/2)/13)*1,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*2,0,(windowWidth/2)/13,windowHeight - 20);
fill('#deded9');
rect(((windowWidth/2)/13)*3,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*4,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*5,0,(windowWidth/2)/13,windowHeight - 20);
fill('#deded9');
rect(((windowWidth/2)/13)*6,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*7,0,(windowWidth/2)/13,windowHeight - 20);
fill('#deded9');
rect(((windowWidth/2)/13)*8,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*9,0,(windowWidth/2)/13,windowHeight - 20);
fill('#deded9');
rect(((windowWidth/2)/13)*10,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*11,0,(windowWidth/2)/13,windowHeight - 20);
fill('#ebebeb');
rect(((windowWidth/2)/13)*12,0,(windowWidth/2)/13,windowHeight - 20);

if (poly > 0){
  translate(width*0.5, height*0.5);
  rotate(frameCount / 200.0);
for (i = 0; i <= maxshapes; i++){

//blendMode(SOFT_LIGHT);
blendMode(SOFT_LIGHT);
    //noStroke();
    noFill();

    strokeWeight(1.2);

    stroke(color(random(255),random(255),random(255)));

    //fill(color(random(255),random(255),random(255)));
    rotate(10);
    var pg = new polygon(0, 0, 220, 2+poly);
    var pg2 = new polygon(0, 0, 220, 2+poly);

blendMode(NORMAL);

var spectrum = fft.analyze();

stroke("red");
strokeWeight(2);
  beginShape();
  for (i = 0; i<spectrum.length; i++) {
   vertex(i, map(spectrum[i], 0, 255, height, 0) );
  }
  endShape();

}

}/* else {

   clear();
    background("#e3e3dd");
}*/

}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function osc(o, freq, a, d, s, r, key, otwotype, otwoamp, detune){

envelopes[key] = new p5.Env();
voices[key] = new p5.Oscillator();
voices2[key] = new p5.Oscillator();
reverb = new p5.Reverb();

console.log(voices[voices.length-1]);

  envelopes[key].setADSR(a, d, s, r);
  envelopes[key].setRange(1, 1);
  envelopes[key].play();
  voices[key].amp(envelopes[key]);
  voices[key].setType(o);
  voices[key].freq(freq);
  voices[key].start();
  voices2[key].amp(envelopes[key]);
  voices2[key].setType(otwotype);
  voices2[key].freq(freq+detune);
  voices2[key].start();
  reverb.process(voices[key], 1, 0.8);
    reverb.process(voices2[key], 1, 0.8);
}

function keyPressed() {

rotatespeed = midiToFreq(keystatus[String.fromCharCode(keyCode)].midi)/100000;

//console.log(keystatus[String.fromCharCode(keyCode)]);

if (keystatus[String.fromCharCode(keyCode)] !== null){

if (keystatus[String.fromCharCode(keyCode)].playing == false){

poly+=1;

var voice =  new osc("triangle",midiToFreq(keystatus[String.fromCharCode(keyCode)].midi+(12*octave)), .001 , .5 , 1 , .01, [String.fromCharCode(keyCode)], "triangle", 1, 3);

keystatus[String.fromCharCode(keyCode)].playing = true;

console.log(keystatus);

}

}

}

function keyReleased() {



if (keystatus[String.fromCharCode(keyCode)].playing == true){

  rotatespeed = .01;

keystatus[String.fromCharCode(keyCode)].playing = false;

voices[String.fromCharCode(keyCode)].stop();
voices2[String.fromCharCode(keyCode)].stop();

voices[String.fromCharCode(keyCode)] = null;
voices2[String.fromCharCode(keyCode)] = null;

envelopes[String.fromCharCode(keyCode)] = null;

poly -=1;

}

}

function mousePressed() {

var notes = [60,61,62,63,64,65,66,67,68,69,70,71,72,73];

var segment;


console.log(mouseX , (windowWidth/2)+10);

if ((windowWidth/2)+10 > mouseX){

if (mouseX < ((windowWidth/2)/13)*1){
  segment = 0;
} else if (mouseX < ((windowWidth/2)/13)*2){
    segment = 1;
} else if (mouseX < ((windowWidth/2)/13)*3){
    segment = 2;
} else if (mouseX < ((windowWidth/2)/13)*4){
    segment = 3;
} else if (mouseX < ((windowWidth/2)/13)*5){
    segment = 4;
} else if (mouseX < ((windowWidth/2)/13)*6){
    segment = 5;
} else if (mouseX < ((windowWidth/2)/13)*7){
    segment = 6;
} else if (mouseX < ((windowWidth/2)/13)*8){
    segment = 7;
} else if (mouseX < ((windowWidth/2)/13)*9){
    segment = 8;
} else if (mouseX < ((windowWidth/2)/13)*10){
    segment = 9;
} else if (mouseX < ((windowWidth/2)/13)*11){
    segment = 10;
} else if (mouseX < ((windowWidth/2)/13)*12){
    segment = 11;
} else if (mouseX < ((windowWidth/2)/13)*13){
    segment = 12;
}



  if (keystatus.mouse !== null){

  if (keystatus.mouse.playing == false){

  var voice =  new osc("sawtooth",midiToFreq(notes[segment]), .001 , .5 , 1 , .01, "mouse", null, 0, 0);

  keystatus.mouse.playing = true;


  }

  }

  }

}

function mouseReleased() {

  if (keystatus.mouse.playing == true){

    rotatespeed = .01;

  keystatus.mouse.playing = false;

  voices.mouse.stop();
  voices2.mouse.stop();

  voices.mouse = null;
  voices2.mouse = null;

  envelopes.mouse = null;


  }

}


function windowResized(){
  resizeCanvas(windowWidth/2, windowHeight - 20);
}
