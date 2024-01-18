status1 = "";

function setup()
{
    canvas = createCanvas(300, 300, 300, 300)
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";     
    info1 = document.getElementById("in").value;
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
}

function draw()
{
    image(video, 0, 0, 300, 300);
}