// module aliases
    var Engine = Matter.Engine,
    // Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies, 
        Constraint = Matter.Constraint;

// constants
    const width = 800;
    const height = 800;

    var engine;
    var world;
    var particles = [];
    var boundaries = [];

    var ground; 

function setup() {
    createCanvas(height, width);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    // Engine.run(engine);
    var prev = null;

    for (var x = 200; x < width -20; x += 20) {

        var fixed = false;
        if (!prev) {
            fixed = true;
        }
        var p = new Particle(x, 100, 5, fixed);
        particles.push(p);
        if (prev) {
            var options = {
                bodyA: p.body,
                bodyB: prev.body,
                // pointA: {
                //     x: 0,
                //     y: 0
                // } ,
                length: 20,
                stiffness: 0.4
            }
        

        var constraint = Constraint.create(options);
        World.add(world, constraint);
        }
        prev = p;
    }
    boundaries.push(new Boundary(width/2, height, width, 50, 0));



    // World.add(world, ground);
}

// function mousePressed() {
//     particles.push(new Particle(mouseX, mouseY, random(10, 40)))
// }


function draw() {
    background(51);
    // particles.push(new Particle(600, 50, random(5, 20)))
    Engine.update(engine) //physics system moves ahead moment in time
    // for (var i = 0; i < particles.length; i++) {
    //     particles[i].show();
    //     if (particles[i].isOffScreen()) {
    //         particles[i].removeFromWorld();
    //         particles.splice(i, 1);
    //         i--;
    //     }
    // }
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
    }

    // line(particles[0].body.position.x, particles[0].body.position.y, 
    //     particles[1].body.position.x, particles[1].body.position.y);

    
    // console.log(particles.length, world.bodies.length);
    
} 