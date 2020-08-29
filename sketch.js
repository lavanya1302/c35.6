var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   
  dogImage=loadImage("images/dog.png");
  foodImage=loadImage("images/runner2.jpg");
}


function draw(){
}
