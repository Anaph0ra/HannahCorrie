let canvas;
let header;
let cityFo;
let cityPic;
let smile;
let smileInfo;
let repPic;
let rep;
let adPic;
let ad;
function setup(){
canvas = createCanvas(200,200);
canvas.position(200,400);

cityPic = select("#cityFeels");
cityPic.mouseOver(show);
cityPic.mouseOut(hide);
cityFo = select("#cityF");

smile = select("#smile");
smile.mouseOver(showS);
smile.mouseOut(hideS);
smileInfo = select("#smileInfor");

repPic = select("#repetition");
repPic.mouseOver(showR);
repPic.mouseOut(hideR);
rep = select("#rep");

adPic = select("#adulting");
adPic.mouseOver(showA);
adPic.mouseOut(hideA);
ad = select("#ad");
}

function draw(){
}
//-----------------
function show(){
	// cityPic.style('background-color', 'aqua');
	cityFo.style('visibility', 'visible');
}
function hide(){
	cityPic.style('background-color', 'white');
	cityFo.style('visibility', 'hidden');
}
//-----------------
function showS(){
	smileInfo.style('visibility', 'visible');
}
function hideS(){
	smileInfo.style('visibility', 'hidden');
}
//-----------------
function showR(){
	rep.style('visibility', 'visible');
}
function hideR(){
	rep.style('visibility', 'hidden');
}
//-----------------
function showA(){
	ad.style('visibility', 'visible');
}
function hideA(){
	ad.style('visibility', 'hidden');
}
