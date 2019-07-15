
var words = ['Welcome to Script', 'Introduction', 'Description'];
var colors =[ 
             [ 63, 184, 175],
             [127, 199, 175],
             [218, 216, 167],
             [255, 158, 157],
             [255, 61, 127],
          ];


function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(3);
}

function draw() {
  
  var currentIndex = frameCount % words.length;
  var currentColor = colors[currentIndex];
  var currentWord = words[currentIndex];
  background(200);
  fill(255);
  textSize(45);
  text(currentIndex, width/2, height/2);

}








/*var sizes = [];

function setup() {
  createCanvas(800, 600);
  noFill();
  for (var i=0; i<100; i++){
    var randomValue = random(5, 500);
    sizes.push(randomValue);
  }
}
function draw() {
  background (255);

  for( var i = 0; i < sizes.length; i ++) {
    ellipse(width /2, height / 2, sizes[i], sizes [i]);
  }

}






/*var circle = {
  x: width/2,
  y: width/2,

  size: 50,
  draw: function() {
      ellipse(this.x, this.y, this.size, this.size);
  },
  grow: function() {
        if (this.size < 200) {
          this.size += 1;
        }
  },
};

var circle;

function setup() {
  createCanvas(800, 300);

  circle = {
    x: width/2,
    y: width/2,
  
    size: 50,
    draw: function() {
        ellipse(this.x, this.y, this.size, this.size);
    },
    grow: function() {
          if (this.size < 200) {
            this.size += 1;
          }

  },
};
}
 function draw() {
    background(220);

    fill(237, 34, 93);
    noStroke();

    circle.draw();
    circle.grow();

 }

















/*function setup() {
  // put setup code here
  createCanvas(800, 800);
  //textAlign(CENTER, CENTER);
  //fill(237, 34, 93);
  frameRate();
}



function draw() {
  // put drawing code here
 background(1,75, 100);
 fill(237,34, 93);
 noStroke();
 var diameter = 50;

 for (var i=0; i<width/diameter; i++){
   
  for(var j=0; j<height/diameter; j++)

   ellipse(
     diameter/2 + i * diameter,
     diameter/2 + j * diameter,
     diameter * noise(frameCount/100 + j * 20000 + i * 50000),
     diameter * noise(frameCount/100 + j * 50000 + i * 10000)
   );
   }
 }


 /* var random_0 = random();
  var random_1 = random(10);
  var random_2 = random(100, 1000);
  var offset = 40;
  
  textSize(24);
  background(255);
  text( random_0, width/2, height/2 - offset);
  text( random_1, width/2, height/2-0);
  text( random_2, width/2, height/2 +offset); */



