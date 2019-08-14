/// <reference path="phaser.min.js" />
/// <reference path="scene/mainscene.js" />


var game;


window.onload = function (){
 
    var config =  {

        type: Phaser.canvas,
        width: 640,
        height:250,
        parent : 'phaser-game',
        scene: [MainScene,Spin]
    };
    game = new Phaser.Game(config);

};
