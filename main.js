noseX=0;
noseY=0;

function preload()
{
   clownNose = loadImage('https://i.postimg.cc/FKZ1Mbhv/mustacche.png');
}
 
function draw() {
   image(video, 0, 0, 300, 300);
   image(clownNose, noseX, noseY, 60, 60);
}
 
function take_snapshot()
{
  save('my_image.png');
}
 
function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
 
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
 
function modelLoaded()
{
   console.log('PoseNet Is Initialized');
}
 
function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       noseX = results[0].pose.nose.x - 30;
       noseY = results[0].pose.nose.y - 30;
       console.log("nose x = " + noseX);
       console.log("nose y = " + noseY);
   }
}
