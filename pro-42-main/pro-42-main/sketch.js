var canvas, backgroundImage;
var database;
var spacecraft1,
  spacecraft2,
  spacecraft3,
  spacecraft4,
  spacecraft,
  iss_img,
  iss;
var hasDocked = false;

function preload() {
  backgroundImage = loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4 = loadImage("Docking-undocking/spacecraft4.png");
  iss_img = loadImage("iss.png");
}

function setup() {
  createCanvas(1000, 650);

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 130);
  iss.addImage(iss_img);
  iss.scale = 0.7;
}

function draw() {
  background(backgroundImage);

  spacecraft.addImage(spacecraft1);
  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1, 1);

    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2;
    }

    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x - 1;
    }

    if (keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x + 1;
    }

    if (keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraft2);
    }
  }
  if (spacecraft.y <= iss.y + 70 && spacecraft.x <= iss.x - 10) {
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200, 300);
  }

  drawSprites();
}
