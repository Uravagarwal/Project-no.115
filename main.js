function preload()
{

}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,300,300)
}

function take_snapshot()
{
    save('quarter_clown.png');
}

function modelLoaded()
{
    console.log("modelloaded is working!")
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        console.log("leftEar x = "+results[0].pose.leftEar.x);
        console.log("leftEar y = "+results[0].pose.leftEar.y);
        console.log("leftEye x = "+results[0].pose.leftEye.x);
        console.log("leftEye y = "+results[0].pose.leftEye.y);
        console.log("rightEar x = "+results[0].pose.rightEar.x);
        console.log("rightEar y = "+results[0].pose.rightEar.y);
        console.log("rightEye x = "+results[0].pose.rightEye.x);
        console.log("rightEye y = "+results[0].pose.rightEye.y);

    
    }
}