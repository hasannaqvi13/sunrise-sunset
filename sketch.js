const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);   
    }

    Engine.update(engine);

    // write code to display time in correct format here
   
    if(hour>=12){ 
        text("Time : "+ hour%12 + " PM", 50,100); 
    }
    else if(hour==0){
         text("Time : 12 AM",100,100); 
        }
    else{ 
        text("Time : "+ hour%12 + " AM", 50,100); }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responnse = await fetch("https://worldtimeapi.org/api/timezone/Europe/London")
    //change the data in JSON format
    var responseJSON = await responnse.json()
    var datetime = responseJSON.datetime
    // write code slice the datetime
    hour = datetime.slice(11,13)
    //var hour = 04
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png"
    } 
    else if (hour>=06 && hour<=08){
        bg = "sunrise2.png"
    } 
    else if (hour>=08 && hour<=10){
        bg = "sunrise3.png"
    } 
    else if (hour>=10 && hour<=12){
        bg = "sunrise4.png"
    } 
    else if (hour>=12 && hour<=14){
        bg = "sunrise5.png"
    } 
    else if (hour>=14 && hour<=16){
        bg = "sunrise6.png"
    } 
    else if (hour>=16 && hour<=18){
        bg = "sunset7.png"
    } 
    else if (hour>=18 && hour<=20){
        bg = "sunset8.png"
    } 
    else if (hour>=20 && hour<=22){
        bg = "sunset9.png"
    } 
    else if (hour>=22 && hour<=00){
        bg = "sunset10.png"
    } 
    else if (hour>=00 && hour<=02){
        bg = "sunset11.png"
    } 
    else if (hour>=02 && hour<=04){
        bg = "sunset12.png"
    } 
    

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
    console.log(hour)
}
