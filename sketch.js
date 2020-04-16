// module aliases
    var Engine = Matter.Engine,
    // Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    var engine;
    var world;
    var particles = [];
    var boundaries = [];

    var ground; 

function setup() {
    createCanvas(800, 800);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
        isStatic: true
    }
    boundaries.push(new Boundary(500, 200, width*0.6, 50, -0.3));
    boundaries.push(new Boundary(200, 500, width*0.5, 50, 0.3));

    // World.add(world, ground);
}

// function mousePressed() {
//     particles.push(new Particle(mouseX, mouseY, random(10, 40)))
// }


function draw() {
    background(51);
    particles.push(new Particle(600, 50, random(5, 20)))
    Engine.update(engine) //physics system moves ahead moment in time
    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
        if (particles[i].isOffScreen()) {
            particles[i].removeFromWorld();
            particles.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    
    console.log(particles.length, world.bodies.length);
    
} 