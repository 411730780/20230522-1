class Bullet{
    constructor(agrs){
        this.r =agrs.r||10
        this.p =agrs.p||shipP.copy()
        this.v =agrs.v||createVector(mouseX-width/2,mouseY-height/2).limit(6)
        this.color =agrs.color||"red"
    }
    draw(){
        push()
        translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        ellipse(0,0,this.r)
        pop()
    }
    update(){
        this.p.add(this.v)
    }
}