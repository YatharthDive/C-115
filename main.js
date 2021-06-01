function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.size(400,400);
    cam.hide();
    postnet=ml5.poseNet(cam,Yatharth);
    postnet.on('pose',getposes)
}
function getposes(results) {
    if (results.length>0) {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        console.log("righteye x= "+results[0].pose.rightEye.x);
        console.log("righteye y= "+results[0].pose.rightEye.y);
    }
}
function Yatharth() {
    console.log("modelLoaded");
}
function draw(){
image(cam,0,0,400,400);
}
function take_snapshot(){
    save("myfilter.image.png");
}