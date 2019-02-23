/** @type {import 'phaser'} */

var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('./assets');

    // this.load.image('sky', 'menu.png');
    // this.load.image('logo', 'reimu.png');
    // this.load.image('red', 'reimu.png');
    this.load.atlas('sky', 'menu.png', 'atlas.json');
}

function create ()
{
    this.add.image(320, 240, 'sky')

    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(false);

    // emitter.startFollow(logo);
}

function update() {

}