leftWristX=0;
leftWristY=0
rightWristX=0;
rightWristY=0;
sound="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses)

}
function modelLoaded(){
    console.log("Model Initialized!!");
}
function draw(){
    image(video,0,0,600,500);

}
function preload(){
    sound = loadSound("song.mp3");



}
function play(){
    sound.play();
sound.setVolume(1);
sound.rate(1);
}
function gotPoses(results){
if(results.length>0){
    console.log(results);

    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;
    console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

   rightWristX= results[0].pose.rightWrist.x;
  rightWristY= results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);

}
}