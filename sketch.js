var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17
var player
var enimy,enimy1,enimy2,enimy3,enimy4
var g
var k1,k2,k3,k4,e1
var keys=0
var PLAY=2
var END=1
var WIN=0
var gameState=PLAY
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w22,w23,w24,w25,w26
var i1,i2,i3,i4,i5,i6,i7,i,i8,i12,i75,i71,i72,i73,i74,i76,i77,i78,i79,i80,i80,i81,i82,i83,i84,i85,i86,i87,i88,i89,i90,i91,i92,i93,i94,i95,i96,i97,i98,i99,i100
var vid,pl,gp,a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,SA
function preload(){
   e1=loadImage("download.png")
   i=loadImage("images (2).jpg")
   a=loadImage("images (3).jpg")
   c=loadImage("images (4).jpg")
   b=loadImage("images (6).jpg")
   d=loadImage("images (5).jpg")
   e=loadImage("images (9).jpg")
   f=loadImage("images(15).jpg")
   h=loadImage("images (18) copy.png")
   pl=loadImage("download.png")
   gp=loadImage("5.png")
   j=loadImage("images(5.5).jpg")
   m=loadImage("images (25).jpg")
   n=loadImage("images (4.5).jpg")
   o=loadImage("images (3.5).jpg")
   SA=loadImage("images (2).png")
   //m=loadImage("images(4.5).jpg")
}
function setup() {
  createCanvas(1300,700);
  g=new Group()
  z=new Group()
  if (gameState===PLAY){
    z.add(i78=createSprite(434,115,185,50))
    z.add( i80=createSprite(504,115,185,10))
    z.add(i81=createSprite(514,115,185,10))
    z.add(i82=createSprite(524,120,185,10))
    z.add( i83=createSprite(554,140,185,10))
    z.add(i84=createSprite(534,130,185,10))
    z.add(i85=createSprite(1114,130,270,10))
    z.add( i86=createSprite(1114,130,270,10))
    z.add( i86=createSprite(1514,90,420,10))
    z.add(i87=createSprite(1714,110,420,10))
    z.add(i88=createSprite(2144,110,150,10))
    z.add( i89=createSprite(2484,110,150,10))
    z.add( i90=createSprite(2700,100,320,10))
    z.add( i91=createSprite(2900,100,80,10))
    z.add( i92=createSprite(3020,110,155,10))
    z.add(i93=createSprite(3300,100,80,10))
    z.add(i94=createSprite(3340,95,10,80))
    z.add( i95=createSprite(3400,100,120,10))
    z.add(i96=createSprite(3880,130,265,10))
    z.add( i97=createSprite(4240,100,305,10))
    z.add(i79=createSprite(494,115,185,30))
    i98=createSprite(2100,250,4400,10)
    i98.visible=false
  
  
    z.add(i99=createSprite(600,95,10,90))
    z.add(i100=createSprite(380,95,10,90))
  
  w1=createSprite(980,95,10,90)
    w2=createSprite(1240,95,10,90)
  
    w3=createSprite(1700,80,10,90)
    w3.visible=false
     w4=createSprite(1300,80,10,90)
    w4.visible=false
    w5=createSprite(1920,80,10,90)
    w5.visible=false
     w6=createSprite(2400,80,10,90)
    w6.visible=false
    w7=createSprite(3100,80,10,90)
    w7.visible=false
  i1=createSprite(204,80,250,50)
  i1.addImage(a)
  i1.scale=2 
  i2=createSprite(690,80,250,50)
  i2.addImage(i)
  i2.scale=2 
  i3=createSprite(1275,80,250,50)
  i3.addImage(c)
  i3.scale=2
  i4=createSprite(1863,80,250,50)
  i4.addImage(b)
  i4.scale=2
  i5=createSprite(2458,80,250,50)
  i5.addImage(e)
  i5.scale=2
  i6=createSprite(3040,80,250,50)
  i6.addImage(b)
  i6.scale=2
  i7=createSprite(3635,80,250,50)
  i7.addImage(f)
  i7.scale=2
  i8=createSprite(4043,80,250,50)
  i8.addImage(c)
  i8.scale=2
  i12=createSprite(215,670,250,50)
  i12.addImage(h)
  i12.scale=2.1
  i71=createSprite(840,670,250,50)
  i71.addImage(j)
  i71.scale=2
  i72=createSprite(1435,670,250,50)
  i72.addImage(j)
  i72.scale=2
  i73=createSprite(1963,670,250,50)
  i73.addImage(m)
  i73.scale=2
  i74=createSprite(2515,670,250,50)
  i74.addImage(n)
  i74.scale=1.95
  i75=createSprite(3098,670,250,50)
  i75.addImage(o)
  i75.scale=2

 
  player=createSprite(-90,20,10,10)
  player.shapeColor="brown"
  player.addImage(pl)
  player.scale=0.1
  z.add(w11=createSprite(-100,80,10,200))
  w11.visible=false
 z.add( wall1=createSprite(10,80,200,10))
 wall1.visible=false

 
  enimy=createSprite(500,90,20,20)
  enimy.shapeColor="green"
  enimy.velocityX=+3
  enimy.scale=0.1
  enimy.addImage(gp)
  enimy1=createSprite(1000,120,20,20)
  enimy1.shapeColor="green"
  enimy1.velocityX=+3
  enimy1.scale=0.1
  enimy1.addImage(gp)
  enimy2=createSprite(1300,80,20,20)
  enimy2.shapeColor="green"
  enimy2.velocityX=+5
 
  enimy2.scale=0.1
  enimy2.addImage(gp)
  enimy4=createSprite(2500,80,20,20)
  enimy4.shapeColor="green"
  enimy4.velocityX=+7
  enimy4.scale=0.1
  enimy4.addImage(gp)
  
  enimy3=createSprite(1740,90,20,20)
  enimy3.shapeColor="green"
  enimy3.velocityX=+3
  enimy3.scale=0.1
  enimy3.addImage(gp)
  k1=createSprite(4300,80,10,10)
  k1.addImage(SA)
  k1.scale=0.1 
  k1.shapeColor="yellow"
  

  }
  camera.zoom=camera.zoom+0.8
}
function draw() {
  background(255,255,255);

  if (gameState===PLAY){
  if (player.isTouching(k1)){
    k1.destroy()
   keys=keys+1
  }
  text("keys"+keys,100,100)  
  
  text("keys"+keys,100,100)  
  if (keyDown("right")) {
    player.x=player.x+5;
  }
  if (keyDown("left")) {
    player.x=player.x-5;
  }
  player.collide (z); 
  if(keyDown("space")&& player.y >= 60) {
    player.velocityY = -6;
}
player.velocityY=player.velocityY+0.28


  
  if (keys===4){
     var s=createSprite(400,200,50,50)
    k4.shapeColor="yellow"
  }
  enimy.bounceOff(i99)
  enimy.bounceOff(i100)

  enimy4.bounceOff(w6)
  enimy4.bounceOff(w7)
  enimy1.bounceOff(w1)
  enimy1.bounceOff(w2)
  enimy2.bounceOff(w3)
  enimy2.bounceOff(w4)
  enimy3.bounceOff(w3)
  enimy3.bounceOff(w5)
  enimy1.bounceOff(g)
  enimy2.bounceOff(g)
  enimy3.bounceOff(g)
  textSize(0)
  fill(255,0,0)
  text("How To Play :-",-300,10)
  text("Right:-right Arrow  ",-300,40)
  text("Left:-Left Arrow",-300,60)
  text("Jump:-Space",-300,80)
  text("Story:-",-300,-100)
  text("Your Mission is Collect vaccino and save from coronavirus and in  ",-440,-80)
  text(" last of game one vaccino after collect vaccino game will be Finish",-450,-60)
  if (enimy.isTouching(player)||enimy1.isTouching(player)||enimy2.isTouching(player)||enimy3.isTouching(player) ||enimy4.isTouching(player)||player.isTouching(i98)){
    gameState=END
  }
  if (keys===1){
    gameState=WIN
  }
}

 

camera.x=player.x
camera.y=player.y
//camera.zoom=camera.zoom
  ghost()
  if (gameState===END){
    createCanvas(600,400)
    background("white")
    textSize(20)
    fill(255,0,0)
    text("GAMEOVER Your Mission Faild",100,100)
    text("Learn How coronavirus Work ",100,200)
    vid=createVideo("MOA of Messenger RNA-Based COVID-19 Vaccines.mp4")
    vid.loop()
    vid.lop()
    vid.size(1200,500)
  }
   drawSprites();
   text()
  if (gameState===END){
    background(255,255,255)

    textSize(50)
    fill(255,0,0)
    text("GAMEOVER",200,200)
   
    
    
  }
  if (gameState===WIN){
    background(255,255,255)
    textSize(50)
    fill(255,0,0)
    text("GAMEOVER",4200,200)
    text("YOU WIN",4200,250)
  }
}
 function ghost(){
  // enimy.bounce(enimy1)

  r=random(1,2)
  
  if(enimy.velocityX==0&&enimy.collide(g))
  {
    if(r==1)
    {
     enimy.velocityX=5;
    }
    else
    {
      enimy.velocityX=5
    }
    enimy.velocityY=0;
    enimy.bounceOff(g);
  }
  
   if(enimy.velocityY==0&&enimy.collide(g))
  {
    if(r==1)
    {
     enimy.velocityY=5;
    }
    else
    {
      enimy.velocityY=-5
    }
    enimy.velocityX=0;
  
  }
  enimy.bounceOff(g);
 }
 