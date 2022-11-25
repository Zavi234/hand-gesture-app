Webcam.set({
    width:350,
    height:300,
    Image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function takesnapshot()
{
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML= "<img id='take_picture' src='"+data+"'/>"
    })
}

console.log("ml5version:", ml5.version)

var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6Cr9xaIFO/model.json",modelloaded)

function modelloaded()
{
    console.log("Model has loaded")
}

function speaking()
{
    var synth= windows.speechSynthesis
    data_1="The first prediction is " 
    data_2="The second prediction is "

    var save_sound= new SpeechSynthesisUtterance(data_1+data_2)
    synth.speak(save_sound)
}

function gotresult()
{
    
}