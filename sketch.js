// let points = [
// [7,10],[12,6],[12,4],[9,1],[10,-2],[10,-7],[5,-10],[1,-11],[1,-13],[-3,-13],[-14,-4],[-13,4],
// [-11,9],[-12,13],[-10,16],[-8,17],[-5,13],[3,13],[7,16],[10,15],[10,13],[7,10]
// ]


// let points =[[6, -3], [5, 0], [7, 2],[7,4],[6,5],[9,5],[9,6],[8,7],[7,8],[6,8],[5,10],[4,10],[4,9],[5,8],[4,5],[0,5],[-2,4],[-4,1],[-4,-6],[-5,-7],[-10,-6],[-9,-7],[-4,-8],[-3,-7],[-1,-5],[4,4],[3,2],[3,1],[5,-3],[4,-4],[5,-4],[6,-3],[4,1],[5,2],[1,-4],[2,-5],[2,-8],[8,-8],[7,-7],[3,-7],[3,-1],[4,-1],[3,-1],[2,-3],[0,-5],[-4,-2],[-3,-4],[-1,-5],[-1,-9],[5,-10],[6,-9],[0,-8],[0,-5],[1,0],[-1,3],[5,-4],[6,-4],[7,-3],[6,1]];
let points = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2],[1,2]]; //list資料，
var stroke_colors = "134074-13315c-0b2545-8da9c4-eef4ed".split("-").map(a=>"#"+a)
var fill_colors = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)

function preload(){
  elephent_sound= loadSound("sound/elephant.wav")
  bullet_sound=loadSound("sound/Launching wire.wav")
}
class obj{
  constructor(){//預設值

  }
}
var ball
var balls=[]
var bullet
var bullets=[]
var monster
var monsters
var score=0
function setup(){
  createCanvas(windowWidth,windowHeight);
shipP =createVector(width/2,height/2)
  for(var j=0;j<10;j=j+1){
    ball=new obj()
    balls.push(ball)
  }
  for(var j=0;j<20;j=j+1){
    monster = new Monster({})
    monsters.push(monster)
  }

}

function draw() {
  background(220);
  if(keyPressed){
    if(key=="ArrowLeft"){
      shipP.x=shipP.x-5
    }
    if(key=="ArrowRight"){
      shipP.x=shipP.x+5
    }
    if(key=="ArrowUp"){
      shipP.y=shipP.y-5
    }
    if(key=="ArrowDown"){
      shipP.y=shipP.y+5
    }
  }
  for(let ball of balls)
 {
  
  ball.draw()
  ball.update()
  for(let bullet of bullets){
    if(ball.isBallInRanger(bullet.p.x,bullet.p.y))
    {
      score=score+1
      elephent_sound.play()
      balls.splice(balls.indexOf(ball),1)
      bullets.splice(bullets.indexOf(bullet),1)
    }
  }
  
 } 

for(let bullet of bullets){
  bullet.draw()
  bullets.update()
 }
 for(let monster of monsters){
  if(monster.IsDead&&monster.timenum>=6){
    monsters.splice(monsters.indexOf(monster),1)
  }
  monster.draw()
  monsters.update()
 }
   for(let bullet of bullets){
   if(monster.isBallInRanger(bullet.p.x,bullet.p.y))
   {
    score=score+1
    //elephent_sound.play()
    //monsters.splice(monsters.indexOf(monster),1)
    monster.IsDead=true
    bullets.splice(bullets.indexOf(bullet),1)
    }
}

textSize(50)
text(score,50,50)
push()
 let dx=mouseX-width/2
 let dy=mouseY-height/2
 let angle=atan2(dy,dx)

 //translate(width/2,height/2)
 translate(shipP.X,shipP.Y)
 rotate(angle)
 noStroke()
 fill("#ffc03a")
 ellipse(0,0,60)
 fill("#ff0000")
 triangle(50,0,-25,-25,-25,25)
 pop()


}
function mousePressed(){
  bullet=new Bullet({})
  bullets.push(bullet)
  bullet_sound.play()
  elephent_sound.play()
}

function keyPressed(){
  if(key==" "){
    bullet=new Bullet({})
  bullets.push(bullet)
  bullet_sound.play()
  }
 
}

