var bola;
var G = 5;
var M = 2;


class Bola {
	constructor(x, y, radius) {
		this.pos = createVector(x, y);
		this.radius = radius;
		this.vel = createVector(1,0);
		this.acc = createVector(0,0);
		this.m = 1;
	}
	show(){
		stroke(0);
		strokeWeight(4);
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.radius);
	}
	gira(x1, y1, x2, y2){
		var F = force(x1, y1, x2, y2);

		// direção do vetor
		var dir = F.normalize();

		// magnitude do vetor
		var d = dist(x1, y1, x2, y2);
		d = constrain(d, 5, 25);
		var forca = (G * this.m * M)/(d*d)
		var forcaresult = dir.mult(forca);

		this.acc.add(forcaresult);
		console.log(this.acc);
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.acc.mult(0);

	}

}
function force(x1, y1, x2, y2){
	var x = createVector(x1, y1);
	var y = createVector(x2, y2);
	var xy = p5.Vector.sub(x, y);
	return xy;
}

function bolacentro(x, y, raio){
	stroke(0);
	strokeWeight(4);
	fill(255);
	ellipse(x, y, raio)
}

function setup() {
	createCanvas(700,400);
	bola = new Bola(350, 60, 20);
}


function draw() {
	var meio1 = width/2;
	var meio2 = height/2;
	background(51);
	bolacentro(meio1, meio2, 75);
	bola.show();
	bola.gira(meio1, meio2, bola.pos.x, bola.pos.y);
}


