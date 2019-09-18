

var game;

var config = {
    type: Phaser.AUTO,
    //parent: 'phaser-example',
    width: 640,
    height: 245,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [MainScene,Spin]
};

var game = new Phaser.Game(config);
