function preload(){
beard=loadImage('https://i.postimg.cc/D0k2JVRZ/beard-clipart-5.png');
wig=loadImage('https://i.postimg.cc/nz88T42S/Daco-389918.png');
}
noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.size(400,400);
    cam.hide();
    postnet=ml5.poseNet(cam,Yatharth);
    postnet.on('pose',getposes)
}
function Yatharth() {
    console.log('PoseNet Is Initialized');
}
function getposes(results) {
    if (results.length>0) {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function Yatharth() {
    console.log("modelLoaded");
}
function draw(){
image(cam,0,0,400,400);
fill("Red");
stroke("Blue")
//circle(noseX,noseY,30);
image(beard,noseX-45,noseY+7,90,90);
image(wig,noseX-60,noseY-130,120,90);
}
function take_snapshot(){
    save("myfilter.image.png");
}