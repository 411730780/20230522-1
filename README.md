# 20230522-1
---
tags: 程式設計,第十一章,物件導向與向量 - Class 粒子系統與互動遊戲，學生版,互動藝術程式創作入門,Creative Coding
---
# 11. 學生版_物件導向與向量(2) - Class 粒子系統與互動遊戲

## 設定this.a的值與移動值(this.v)
![](https://i.imgur.com/2KMYqBA.gif)


---

```javascript=
	constructor(args){ //預設值(工廠)
		this.r=args.r || 100
		// this.p={x:random(width),y:random(height)}
		this.p=args.p
		this.v={x:random(-2,2),y:random(-2,2)}
		this.a = args.a || {x:0,y:0}
		this.color = random(colors)
	}
```



---
### 加上兩個弧度元件(半圓眼睛與眼球)
![](https://i.imgur.com/FrqVlpN.gif)



---

```javascript=



```


---
### 依照心情顯示全圓或半圓的眼睛

在constructor設定

```javascript=
	constructor(args){ //預設值(工廠)
		this.r=args.r || 100
		// this.p={x:random(width),y:random(height)}
		this.p=args.p || {x:width/2,y:height/2}
		this.v=this.v || {x:random(-2,2),y:random(-2,2)}
		this.a = args.a || {x:0,y:0}
		this.color = random(colors)
        //+++++++++++++++++++++++++++++++
		this.mode = random(["happy","bad"])
        //++++++++++++++++++++++++++++++++
	}
```


---
### 產生圓圈(happy)或半圓(bad)的眼睛
依照mode為happy 或是 bad，產生不一樣的眼睛
![](https://i.imgur.com/IrBx8mA.gif)


---


---
#### 加上if指令
```javascript=



```

---

### 開心(圓眼睛)上下跳動

![](https://i.imgur.com/T8Xw9vZ.gif)


---
### 加上if指令，並利用sin()函數做上下跳動
sin()的值在-1與1之間

```javascript=
	update(){
		
        
        
	}
```


---
## 畫腳
### 先畫一隻腳
![](https://i.imgur.com/o72j8yl.gif)
```javascript=
			stroke(this.color)
			strokeWeight(4)
			line(this.r/2,0,this.r,0)
```
---
```javascript=
draw(){
		
		
    
    
    
		}
```


---
## 畫彎曲的腳
把其中一條指令line(this.r/2,0,this.r,0)改為以下指令

(並加上sin()函數，讓其變得彎曲的腳)

![](https://i.imgur.com/ZGUgAKt.gif)



---


```javascript=
beginShape()
			for(var i=0;i<30;i++){
				vertex(this.r/2+i,sin(i/5)*10) 
			}
endShape()
```
---
## 加上frameCount可以變成轉動

![](https://i.imgur.com/BVFDuEp.gif)


---

```javascript=
noFill()
		beginShape()
			for(var i=0;i<30;i++){
				vertex(this.r/2+i,sin(i/5+frameCount/10)*10) 
			}
		endShape()
```
---

## 產生八個腳


![](https://i.imgur.com/8GfLNhu.gif)



---


```javascript=
        





```

---
## 把腳變長一點
![](https://i.imgur.com/3ExsnFM.gif)



---

```javascript=
vertex(this.r/2+i,sin(i/5+frameCount/10)*10)
```
改為x軸*2

```javascript=
vertex(this.r/2+i*2,sin(i/5+frameCount/10)*10)
```


---
## 按下滑鼠便逃走的物件


![](https://i.imgur.com/PlYiIHa.gif)


---

### 在class內新增兩個函數
```javascript


	escape(){
		this.v.x=random(-10,10)
	}
	setHappy(){
		this.mode="happy"
	}

```
## 按下滑鼠
```javascript=
function mousePressed(){
	for(let ball of balls){
		ball.setHappy() //把所有ball都改為happy模式，眼睛都會變圓圈
		ball.escape()
	}
```



---
## 讓每一隻物件都不一樣的動作
只要加上
```javascript=
this.rid = random(10000)
```


---


```javascript=




```



---

## 讓每隻物件腳移動都不一樣
![](https://i.imgur.com/XCHiaTl.gif)


---

```javascript=

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

```


---

#### 讓每隻物件上下跳動都不一樣

```javascript=



```


---
## 滑鼠按一下，產生一個新的物件

![](https://i.imgur.com/xSP9SEG.gif)

```javascript=




```


---
滑鼠靠近物件就變顏色
![](https://i.imgur.com/rtr5itQ.gif)

在class內多一個函數，是可以傳回參數值
```javascript=
	isBallInRange(){
		let d=dist(mouseX,mouseY,this.p.x,this.p.y)
		if(d<this.r){
			return true
		}else{
			return false
		}
	}
```


---

```javascript=



```


---
## 滑鼠靠近物件，就會亂跑

![](https://i.imgur.com/TqP69ZY.gif)

```javascript=




```
---
## 滑鼠靠近變成crazy模式
```javascript=




```
```

```
---

## 在class draw()設定

```javascript=




```


---
11. 學生版_物件導向與向量(2) - Class 粒子系統與互動遊戲.md
目前顯示的是「11. 學生版_物件導向與向量(2) - Class 粒子系統與互動遊戲.md」。
```
